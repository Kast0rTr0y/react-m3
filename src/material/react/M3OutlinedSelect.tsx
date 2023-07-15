import * as React from "react";
import OutlinedSelect from "material/web/MdOutlinedSelect";

interface M3OutlinedSelectProps {
  quick?: boolean;
  required?: boolean;
  disabled?: boolean;
  errorText?: string;
  label?: string;
  supportingText?: string;
  error?: boolean;
  menuFixed?: boolean;
  typeaheadDelay?: number;
  displayText?: string;
  children?: React.ReactNode;
}

export default function M3OutlinedSelect({
  quick,
  required,
  disabled,
  errorText,
  label,
  supportingText,
  error,
  menuFixed,
  typeaheadDelay,
  displayText,
  children
}: M3OutlinedSelectProps) {
  return <OutlinedSelect
    quick={quick} required={required} disabled={disabled} errorText={errorText} label={label}
    supportingText={supportingText} error={error} menuFixed={menuFixed} typeaheadDelay={typeaheadDelay}
    displayText={displayText}
  >
    {children}
  </OutlinedSelect>;
}
