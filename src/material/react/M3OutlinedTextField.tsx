import * as React from "react";
import OutlinedTextField from "material/web/MdOutlinedTextField";

interface OutlinedTextFieldProps {
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  label?: string;
  required?: boolean;
  value?: string;
  prefixText?: string;
  suffixText?: string;
  supportingText?: string;
  max?: string;
  maxLength?: number;
  min?: string;
  minLength?: number;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
}

export default function M3FilledSelect({
  disabled, error, errorText, label, required, value = '', prefixText, suffixText, supportingText, max, maxLength = -1,
  min, minLength, pattern, placeholder, readOnly
}: OutlinedTextFieldProps) {
  return <OutlinedTextField
    label={label} error={error} errorText={errorText} disabled={disabled} required={required} value={value}
    prefixText={prefixText} suffixText={suffixText} supportingText={supportingText} max={max} maxLength={maxLength}
    min={min} minLength={minLength} pattern={pattern} placeholder={placeholder} readOnly={readOnly}
  />;
}
