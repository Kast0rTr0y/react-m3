import * as React from "react";
import FilledSelect from "material/web/MdFilledSelect";

interface M3FilledSelectProps {
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

export default function M3FilledSelect({
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
}: M3FilledSelectProps) {
  return <FilledSelect
    quick={quick} required={required} disabled={disabled} errorText={errorText} label={label}
    supportingText={supportingText} error={error} menuFixed={menuFixed} typeaheadDelay={typeaheadDelay}
    displayText={displayText}
  >
    {children}
  </FilledSelect>;
}
