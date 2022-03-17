import React from "react";
import { useField } from "formik";
import { FieldFeedback } from "./FieldFeedback";
export function FormikCheckBox({
  label,
  type = "checkbox",
  withFeedbackLabel = true,
  customFeedbackLabel,
  ...props
}) {
  const [field, meta, helpers] = useField(props);
  const { touched, error } = meta;
  return (
    <>
      {label && (
        <label>
          <input type={type} {...field} {...props} />
          {label}
        </label>
      )}
    </>
  );
}
