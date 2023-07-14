import * as React from "react";
import FilledSelect from "material/web/MdFilledSelect";

interface M3FilledSelectProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export default function M3FilledSelect({
  children,
  disabled
}: M3FilledSelectProps) {
  return <FilledSelect disabled={disabled}>{children}</FilledSelect>;
}
