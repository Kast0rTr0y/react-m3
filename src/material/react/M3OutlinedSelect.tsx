import * as React from "react";
import OutlinedSelect from "material/web/MdOutlinedSelect";

interface M3OutlinedSelectProps {
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function M3OutlinedSelect({
  disabled,
  children
}: M3OutlinedSelectProps) {
  return <OutlinedSelect disabled={disabled}>{children}</OutlinedSelect>;
}
