import * as React from "react";
import FilledTonalIconButton from "material/web/MdFilledTonalIconButton";
import Icon from "material/web/MdIcon";

interface M3StandardIconButtonProps {
  disabled?: boolean;
  icon: string;
}

export default function M3StandardIconButton({
  disabled,
  icon
}: M3StandardIconButtonProps) {
  return (
    <FilledTonalIconButton disabled={disabled}>
      <Icon>{icon}</Icon>
    </FilledTonalIconButton>
  );
}
