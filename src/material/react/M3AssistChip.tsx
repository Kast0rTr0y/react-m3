import * as React from "react";
import MdAssistChip from "material/web/MdAssistChip";
import MdIcon from "material/web/MdIcon";

interface M3AssistChipProps {
  label: string;
  elevated?: boolean;
  disabled?: boolean;
  icon?: string;
  onClick?: () => void;
}

export default function M3AssistChip({
  label,
  elevated,
  disabled,
  icon,
  onClick
}: M3AssistChipProps) {
  return (
    <MdAssistChip onClick={onClick} label={label} elevated={elevated} disabled={disabled}>
      {icon && <MdIcon slot="icon">{icon}</MdIcon>}
    </MdAssistChip>
  );
}
