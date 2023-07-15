import * as React from "react";
import MdCheckbox from "material/web/MdCheckbox";

interface M3CheckboxProps {
  error?: boolean;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  value?: string;
}

export default function M3Checkbox({
  error,
  checked,
  disabled,
  indeterminate,
  value
}: M3CheckboxProps) {
  return <MdCheckbox error={error} disabled={disabled} checked={checked} indeterminate={indeterminate} value={value} />;
}
