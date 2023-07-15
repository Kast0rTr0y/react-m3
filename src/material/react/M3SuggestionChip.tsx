import * as React from "react";
import MdSuggestionChip from "material/web/MdSuggestionChip";
import MdIcon from "material/web/MdIcon";

interface M3SuggestionChipProps {
  label?: string;
  elevated?: boolean;
  disabled?: boolean;
  icon?: string;
  onClick?: () => void;
}

export default function M3SuggestionChip({
  label,
  elevated,
  disabled,
  icon,
  onClick
}: M3SuggestionChipProps) {
  return (
    <MdSuggestionChip onClick={onClick} label={label} elevated={elevated} disabled={disabled}>
      {icon && <MdIcon slot="icon">{icon}</MdIcon>}
    </MdSuggestionChip>
  );
}
