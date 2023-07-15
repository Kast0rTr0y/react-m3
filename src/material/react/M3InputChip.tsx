import * as React from "react";
import MdInputChip from "material/web/MdInputChip";
import MdIcon from "material/web/MdIcon";

interface M3InputChipProps {
  avatar?: boolean;
  removeOnly?: boolean;
  selected?: boolean;
  label?: string;
  disabled?: boolean;
  icon?: string;
  onClick?: () => void;
}

export default function M3InputChip({
  avatar,
  removeOnly,
  selected,
  label,
  disabled,
  icon,
  onClick
}: M3InputChipProps) {
  return (
    <MdInputChip avatar={avatar} removeOnly={removeOnly} selected={selected} label={label} disabled={disabled} onClick={onClick}>
      {icon && <MdIcon slot="icon">{icon}</MdIcon>}
    </MdInputChip>
  );
}
