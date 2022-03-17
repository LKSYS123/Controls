import React from "react";

export function FieldFeedback({ label, touched, error }) {
  if (touched && error) {
    return <div>{error}</div>;
  }
  if (touched && !error) {
    return <div>유효한 답변입니다</div>;
  }
  return <div></div>;
}
