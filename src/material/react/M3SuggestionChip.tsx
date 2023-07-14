import * as React from "react";
import MdSuggestionChip from "material/web/MdSuggestionChip";
import MdIcon from "material/web/MdIcon";

interface M3SuggestionChipProps {
  label?: string;
  elevated?: boolean;
  disabled?: boolean;
  icon?: string;
}

export default function M3SuggestionChip({
  label,
  elevated,
  disabled,
  icon
}: M3SuggestionChipProps) {
  return (
    <MdSuggestionChip label={label} elevated={elevated} disabled={disabled}>
      {icon && <MdIcon slot="icon">{icon}</MdIcon>}
    </MdSuggestionChip>
  );
}
