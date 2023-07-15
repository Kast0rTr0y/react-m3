import * as React from "react";
import FilledTextField from "material/web/MdFilledTextField";

interface M3FilledTextFieldProps {
  label?: string;
  disabled?: boolean;
}

export default function M3FilledSelect({disabled,label}: M3FilledTextFieldProps) {
  return <FilledTextField label={label} disabled={disabled}></FilledTextField>;
}
