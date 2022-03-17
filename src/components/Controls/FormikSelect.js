import React from "react";
import { useField } from "formik";
import { FieldFeedback } from "./FieldFeedback";
export function FormikSelect({
  label,
  type = "select",
  withFeedbackLabel = true,
  customFeedbackLabel,
  children,
  ...props
}) {
  const [field, meta] = useField(props);
  const { touched, error } = meta;
  return (
    <>
      {label && <label> {label}</label>}
      <select {...field} {...props}>
        {children}
      </select>
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
