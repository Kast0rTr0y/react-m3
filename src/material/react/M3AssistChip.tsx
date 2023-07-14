import * as React from "react";
import MdAssistChip from "material/web/MdAssistChip";
import MdIcon from "material/web/MdIcon";

interface M3AssistChipProps {
  label: string;
  elevated?: boolean;
  disabled?: boolean;
  icon?: string;
}

export default function M3AssistChip({
  label,
  elevated,
  disabled,
  icon
}: M3AssistChipProps) {
  return (
    <MdAssistChip label={label} elevated={elevated} disabled={disabled}>
      {icon && <MdIcon slot="icon">{icon}</MdIcon>}
    </MdAssistChip>
  );
}
