import * as React from "react";
import FilledTonalIconButton from "material/web/MdFilledTonalIconButton";
import Icon from "material/web/MdIcon";

interface M3StandardIconButtonProps {
  disabled?: boolean;
  toggle?: boolean;
  icon: string;
  selectedIcon?: string;
}

export default function M3StandardIconButton({
  disabled,
  toggle,
  icon,
  selectedIcon
}: M3StandardIconButtonProps) {
  return (
    <FilledTonalIconButton toggle={toggle} disabled={disabled}>
      <Icon>{icon}</Icon>
      {selectedIcon && <Icon slot="selectedIcon">{selectedIcon}</Icon>}
    </FilledTonalIconButton>
  );
}
