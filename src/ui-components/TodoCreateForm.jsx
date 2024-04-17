/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField, useTheme } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createTodo } from "../graphql/mutations";
const client = generateClient();
export default function TodoCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
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
    setName(initialValues.name);
    setDescription(initialValues.description);
    setInterest_rate(initialValues.interest_rate);
    setInflation_rate(initialValues.inflation_rate);
    setCurrent_value(initialValues.current_value);
    setFuture_value(initialValues.future_value);
    setPresent_value(initialValues.present_value);
    setCurrency(initialValues.currency);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    interest_rate: [
      { type: "Required" },
      {
        type: "GreaterThanNum",
        numValues: [0],
        validationMessage: "The value must be greater than 0",
      },
    ],
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
      rowGap={tokens.space.small.value}
      columnGap={tokens.space.small.value}
      padding={tokens.space.small.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          description,
          interest_rate,
          inflation_rate,
          current_value,
          future_value,
          present_value,
          currency,
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
            query: createTodo.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TodoCreateForm")}
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
        descriptiveText=""
        isRequired={true}
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
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap={tokens.space.small.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
