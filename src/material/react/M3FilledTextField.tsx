import * as React from "react";
import FilledTextField from "material/web/MdFilledTextField";

interface M3FilledTextFieldProps {
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
  onChange?: (e:any)=>void;
}

export default function M3FilledSelect({
  disabled, error, errorText, label, required, value = '', prefixText, suffixText, supportingText, max, maxLength = -1,
  min, minLength, pattern, placeholder, readOnly, onChange
}: M3FilledTextFieldProps) {
  return <FilledTextField onChange={onChange}
    label={label} error={error} errorText={errorText} disabled={disabled} required={required} value={value}
    prefixText={prefixText} suffixText={suffixText} supportingText={supportingText} max={max} maxLength={maxLength}
    min={min} minLength={minLength} pattern={pattern} placeholder={placeholder} readOnly={readOnly}
  />;
}
