import * as React from "react";
import MdInputChip from "material/web/MdInputChip";
import MdIcon from "material/web/MdIcon";

interface M3InputChipProps {
  label?: string;
  disabled?: boolean;
  icon?: string;
}

export default function M3InputChip({
  label,
  disabled,
  icon
}: M3InputChipProps) {
  return (
    <MdInputChip label={label} disabled={disabled}>
      {icon && <MdIcon slot="icon">{icon}</MdIcon>}
    </MdInputChip>
  );
}
