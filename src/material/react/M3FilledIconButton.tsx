import * as React from "react";
import FilledIconButton from "material/web/MdFilledIconButton";
import Icon from "material/web/MdIcon";

interface M3StandardIconButtonProps {
  disabled?: boolean;
  icon?: string;
}

export default function M3StandardIconButton({
  disabled,
  icon
}: M3StandardIconButtonProps) {
  return (
    <FilledIconButton disabled={disabled}>
      <Icon>{icon}</Icon>
    </FilledIconButton>
  );
}
