/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getTodo } from "../graphql/queries";
import { updateTodo } from "../graphql/mutations";
const client = generateClient();
export default function TodoUpdateForm(props) {
  const {
    id: idProp,
    todo: todoModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    interest_rate: "",
    inflation_rate: "",
    current_value: "",
    future_value: "",
    present_value: "",
    currency: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [interest_rate, setInterest_rate] = React.useState(
    initialValues.interest_rate
  );
  const [inflation_rate, setInflation_rate] = React.useState(
    initialValues.inflation_rate
  );
  const [current_value, setCurrent_value] = React.useState(
    initialValues.current_value
  );
  const [future_value, setFuture_value] = React.useState(
    initialValues.future_value
  );
  const [present_value, setPresent_value] = React.useState(
    initialValues.present_value
  );
  const [currency, setCurrency] = React.useState(initialValues.currency);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = todoRecord
      ? { ...initialValues, ...todoRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setInterest_rate(cleanValues.interest_rate);
    setInflation_rate(cleanValues.inflation_rate);
    setCurrent_value(cleanValues.current_value);
    setFuture_value(cleanValues.future_value);
    setPresent_value(cleanValues.present_value);
    setCurrency(cleanValues.currency);
    setErrors({});
  };
  const [todoRecord, setTodoRecord] = React.useState(todoModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTodo.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTodo
        : todoModelProp;
      setTodoRecord(record);
    };
    queryData();
  }, [idProp, todoModelProp]);
  React.useEffect(resetStateValues, [todoRecord]);
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    interest_rate: [],
    inflation_rate: [],
    current_value: [],
    future_value: [],
    present_value: [],
    currency: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          description: description ?? null,
          interest_rate: interest_rate ?? null,
          inflation_rate: inflation_rate ?? null,
          current_value: current_value ?? null,
          future_value: future_value ?? null,
          present_value: present_value ?? null,
          currency: currency ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateTodo.replaceAll("__typename", ""),
            variables: {
              input: {
                id: todoRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TodoUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              interest_rate,
              inflation_rate,
              current_value,
              future_value,
              present_value,
              currency,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              interest_rate,
              inflation_rate,
              current_value,
              future_value,
              present_value,
              currency,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Interest rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={interest_rate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              interest_rate: value,
              inflation_rate,
              current_value,
              future_value,
              present_value,
              currency,
            };
            const result = onChange(modelFields);
            value = result?.interest_rate ?? value;
          }
          if (errors.interest_rate?.hasError) {
            runValidationTasks("interest_rate", value);
          }
          setInterest_rate(value);
        }}
        onBlur={() => runValidationTasks("interest_rate", interest_rate)}
        errorMessage={errors.interest_rate?.errorMessage}
        hasError={errors.interest_rate?.hasError}
        {...getOverrideProps(overrides, "interest_rate")}
      ></TextField>
      <TextField
        label="Inflation rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={inflation_rate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              interest_rate,
              inflation_rate: value,
              current_value,
              future_value,
              present_value,
              currency,
            };
            const result = onChange(modelFields);
            value = result?.inflation_rate ?? value;
          }
          if (errors.inflation_rate?.hasError) {
            runValidationTasks("inflation_rate", value);
          }
          setInflation_rate(value);
        }}
        onBlur={() => runValidationTasks("inflation_rate", inflation_rate)}
        errorMessage={errors.inflation_rate?.errorMessage}
        hasError={errors.inflation_rate?.hasError}
        {...getOverrideProps(overrides, "inflation_rate")}
      ></TextField>
      <TextField
        label="Current value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={current_value}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              interest_rate,
              inflation_rate,
              current_value: value,
              future_value,
              present_value,
              currency,
            };
            const result = onChange(modelFields);
            value = result?.current_value ?? value;
          }
          if (errors.current_value?.hasError) {
            runValidationTasks("current_value", value);
          }
          setCurrent_value(value);
        }}
        onBlur={() => runValidationTasks("current_value", current_value)}
        errorMessage={errors.current_value?.errorMessage}
        hasError={errors.current_value?.hasError}
        {...getOverrideProps(overrides, "current_value")}
      ></TextField>
      <TextField
        label="Future value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={future_value}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              interest_rate,
              inflation_rate,
              current_value,
              future_value: value,
              present_value,
              currency,
            };
            const result = onChange(modelFields);
            value = result?.future_value ?? value;
          }
          if (errors.future_value?.hasError) {
            runValidationTasks("future_value", value);
          }
          setFuture_value(value);
        }}
        onBlur={() => runValidationTasks("future_value", future_value)}
        errorMessage={errors.future_value?.errorMessage}
        hasError={errors.future_value?.hasError}
        {...getOverrideProps(overrides, "future_value")}
      ></TextField>
      <TextField
        label="Present value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={present_value}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              interest_rate,
              inflation_rate,
              current_value,
              future_value,
              present_value: value,
              currency,
            };
            const result = onChange(modelFields);
            value = result?.present_value ?? value;
          }
          if (errors.present_value?.hasError) {
            runValidationTasks("present_value", value);
          }
          setPresent_value(value);
        }}
        onBlur={() => runValidationTasks("present_value", present_value)}
        errorMessage={errors.present_value?.errorMessage}
        hasError={errors.present_value?.hasError}
        {...getOverrideProps(overrides, "present_value")}
      ></TextField>
      <TextField
        label="Currency"
        isRequired={false}
        isReadOnly={false}
        value={currency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              interest_rate,
              inflation_rate,
              current_value,
              future_value,
              present_value,
              currency: value,
            };
            const result = onChange(modelFields);
            value = result?.currency ?? value;
          }
          if (errors.currency?.hasError) {
            runValidationTasks("currency", value);
          }
          setCurrency(value);
        }}
        onBlur={() => runValidationTasks("currency", currency)}
        errorMessage={errors.currency?.errorMessage}
        hasError={errors.currency?.hasError}
        {...getOverrideProps(overrides, "currency")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || todoModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || todoModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
