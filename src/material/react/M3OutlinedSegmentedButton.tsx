import * as React from "react";
import OutlinedSegmentedButton from "material/web/MdOutlinedSegmentedButton";

interface M3OutlinedSegmentedButtonSetProps {
  disabled?: boolean;
  selected?: boolean;
  label: string;
  noCheckmark?: boolean;
  hasIcon?: boolean;
}

export default function M3OutlinedSegmentedButton({ disabled, selected, label, noCheckmark, hasIcon }: M3OutlinedSegmentedButtonSetProps) {
  return <OutlinedSegmentedButton disabled={disabled} selected={selected} label={label} noCheckmark={noCheckmark} hasIcon={hasIcon}/>;
}
