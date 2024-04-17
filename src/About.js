import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { list, downloadData, uploadData, getUrl, remove } from '@aws-amplify/storage';
import awsconfig from './aws-exports';
import { FiDownload, FiTrash2 } from 'react-icons/fi';
import Table from 'react-bootstrap/Table';
import { useDropzone } from 'react-dropzone';

Amplify.configure(awsconfig);

function App() {
    const [files, setFiles] = useState([]);
    const [folders, setFolders] = useState(new Set());
    const [deleteConfirmation, setDeleteConfirmation] = useState(null);
    const [uploadConfirmation, setUploadConfirmation] = useState(null);
    const [fileUploaded, setFileUploaded] = useState(false);

    async function fetchFiles() {
        try {
            const response = await list('');
            console.log('Response fetched from S3:', response);
            const processedData = processStorageList(response);
            setFiles(processedData.files);
            setFolders(processedData.folders);
        } catch (error) {
            console.error('Error fetching files:', error);
        }
    }

    useEffect(() => {
        fetchFiles();
    }, []);

    useEffect(() => {
        if (fileUploaded) {
            window.location.reload();
            setFileUploaded(false); // Reset the flag after refresh
        }
    }, [fileUploaded]);

    function processStorageList(response) {
        let files = [];
        let folders = new Set();
        response.items.forEach((res) => {
            if (res.size) {
                files.push(res);
                let possibleFolder = res.key.split('/').slice(0, -1).join('/');
                if (possibleFolder) folders.add(possibleFolder);
            } else {
                folders.add(res.key);
            }
        });
        return { files, folders };
    }

    const fetchFileContent = async (file) => {
        try {
            const content = await downloadData(file.key);
            console.log('Content of', file.key, ':', content);
        } catch (error) {
            console.error('Error fetching content of', file.key, ':', error);
        }
    };

    const deleteFile = async (filename) => {
        try {
            await remove({ key: filename });
            await fetchFiles();
            setDeleteConfirmation(`File ${filename} has been deleted.`);
        } catch (error) {
            console.error('Error deleting file:', error);
        }
    };

    const onDrop = async (acceptedFiles) => {
        if (acceptedFiles.length === 0) return;
        const file = acceptedFiles[0];
        await uploadFile(file);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const uploadFile = async (file) => {
        try {
            const result = await uploadData({
                key: file.name,
                data: file,
                options: {
                    accessLevel: 'guest',
                    onProgress: (progress) => console.log('Upload progress:', progress)
                }
            });
            console.log('Succeeded:', result);
            await fetchFiles();
            setUploadConfirmation(`File ${file.name} has been uploaded.`);
            setFileUploaded(true);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <div {...getRootProps()} style={{ marginBottom: '20px' }}>
                <input {...getInputProps()} />
                <div style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center', cursor: 'pointer', fontSize: '12px' }}>
                    Drag & drop files here, or click to select files
                </div>
            </div>
            <h1>Files and Folders in S3 Bucket</h1>
            <div>
                <h2>Folders</h2>
                <ul>
                    {Array.from(folders).map((folder, index) => (
                        <li key={index}>{folder}</li>
                    ))}
                </ul>
            </div>
            <Table striped bordered hover responsive size="sm">
                <thead>
                <tr>
                    <th style={{ fontSize: '12px' }}>File Name</th>
                    <th style={{ fontSize: '12px' }}>eTag</th>
                    <th style={{ fontSize: '12px' }}>Last Modified</th>
                    <th style={{ fontSize: '12px' }}>Size</th>
                    <th style={{ fontSize: '12px' }}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {files.map((file, index) => (
                    <tr key={index}>
                        <td style={{ fontSize: '12px' }}>{file.key}</td>
                        <td style={{ fontSize: '12px' }}>{file.eTag}</td>
                        <td style={{ fontSize: '12px' }}>{new Date(file.lastModified).toLocaleString()}</td>
                        <td style={{ fontSize: '12px' }}>{file.size}</td>
                        <td style={{ fontSize: '12px' }}>
                            <FiDownload onClick={() => fetchFileContent(file)} style={{ cursor: 'pointer' }} />
                            <FiTrash2 onClick={() => deleteFile(file.key)} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                            {deleteConfirmation === `File ${file.key} has been deleted.` && <p style={{ fontSize: '12px', color: 'green' }}>{deleteConfirmation}</p>}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            {uploadConfirmation && <p style={{ fontSize: '12px', color: 'green' }}>{uploadConfirmation}</p>}
        </div>
    );
}

export default App;
