import React from "react";
import { useField } from "formik";
import { FieldFeedback } from "./FieldFeedback";
export function FormikInput({
  label,
  type = "text",
  withFeedbackLabel = true,
  customFeedbackLabel,
  ...props
}) {
  const [field, meta] = useField(props);
  const { touched, error } = meta;
  console.log(props);
  if(props.name === "password") {
    type = "password"
  }
  return (
    <>
      {label && <label> {label}</label>}
      <input className="text-input" type={type} {...field} {...props} />
      {withFeedbackLabel && (
        <FieldFeedback
          error={error}
          touched={touched}
          label={label}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}
