/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TodoUpdateFormInputValues = {
    name?: string;
    description?: string;
    interest_rate?: number;
    inflation_rate?: number;
    current_value?: number;
    future_value?: number;
    present_value?: number;
    currency?: string;
};
export declare type TodoUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    interest_rate?: ValidationFunction<number>;
    inflation_rate?: ValidationFunction<number>;
    current_value?: ValidationFunction<number>;
    future_value?: ValidationFunction<number>;
    present_value?: ValidationFunction<number>;
    currency?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodoUpdateFormOverridesProps = {
    TodoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    interest_rate?: PrimitiveOverrideProps<TextFieldProps>;
    inflation_rate?: PrimitiveOverrideProps<TextFieldProps>;
    current_value?: PrimitiveOverrideProps<TextFieldProps>;
    future_value?: PrimitiveOverrideProps<TextFieldProps>;
    present_value?: PrimitiveOverrideProps<TextFieldProps>;
    currency?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TodoUpdateFormProps = React.PropsWithChildren<{
    overrides?: TodoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    todo?: any;
    onSubmit?: (fields: TodoUpdateFormInputValues) => TodoUpdateFormInputValues;
    onSuccess?: (fields: TodoUpdateFormInputValues) => void;
    onError?: (fields: TodoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TodoUpdateFormInputValues) => TodoUpdateFormInputValues;
    onValidate?: TodoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TodoUpdateForm(props: TodoUpdateFormProps): React.ReactElement;
