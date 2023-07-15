import * as React from "react";
import OutlinedTextField from "material/web/MdOutlinedTextField";

interface OutlinedTextFieldProps {
  label?: string;
  disabled?: boolean;
}

export default function M3FilledSelect({disabled,label}: OutlinedTextFieldProps) {
  return <OutlinedTextField label={label} disabled={disabled}></OutlinedTextField>;
}
