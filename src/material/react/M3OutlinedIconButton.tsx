import * as React from "react";
import OutlinedIconButton from "material/web/MdOutlinedIconButton";
import Icon from "material/web/MdIcon";

interface OutlinedIconButtonProps {
  disabled?: boolean;
  icon?: string;
}

export default function M3StandardIconButton({
  disabled,
  icon
}: OutlinedIconButtonProps) {
  return (
    <OutlinedIconButton disabled={disabled}>
      <Icon>{icon}</Icon>
    </OutlinedIconButton>
  );
}
