import * as React from "react";
import MdFilterChip from "material/web/MdFilterChip";
import MdIcon from "material/web/MdIcon";

interface M3FilterChipProps {
  label?: string;
  elevated?: boolean;
  disabled?: boolean;
  removable?: boolean;
  selected?: boolean;
  icon?: string;
  onClick?: () => void;
}

export default function M3FilterChip({
  label,
  elevated,
  disabled,
  removable,
  selected,
  icon,
  onClick
}: M3FilterChipProps) {
  return (
    <MdFilterChip onClick={onClick} removable={removable} selected={selected} label={label} elevated={elevated} disabled={disabled}>
      {icon && <MdIcon slot="icon">{icon}</MdIcon>}
    </MdFilterChip>
  );
}
