import * as React from "react";
import MenuItem from "material/web/MdMenuItem";
import Icon from "material/web/MdIcon";

interface M3MenuItemProps {
  trailingSupportingText?: string;
  supportingText?: string;
  headline?: string;
  disabled?: boolean;
  iconStart?: string;
  iconEnd?: string;
}

export default function M3MenuItem({
  trailingSupportingText,
  supportingText,
  headline,
  disabled,
  iconStart,
  iconEnd
}: M3MenuItemProps) {
  return (
    <MenuItem
      trailingSupportingText={trailingSupportingText}
      supportingText={supportingText}
      headline={headline}
      disabled={disabled}
    >
      {iconStart && <Icon slot="start">{iconStart}</Icon>}
      {iconEnd && <Icon slot="end">{iconEnd}</Icon>}
    </MenuItem>
  );
}
