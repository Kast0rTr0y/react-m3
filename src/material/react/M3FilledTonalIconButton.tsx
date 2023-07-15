import * as React from "react";
import FilledTonalIconButton from "material/web/MdFilledTonalIconButton";
import Icon from "material/web/MdIcon";

interface M3FilledTonalIconButtonProps {
  disabled?: boolean;
  toggle?: boolean;
  selected?: boolean;
  icon: string;
  selectedIcon?: string;
  onClick?: () => void;
}

export default function M3FilledTonalIconButton({
  disabled,
  toggle,
  selected,
  icon,
  selectedIcon,
  onClick
}: M3FilledTonalIconButtonProps) {
  return (
    <FilledTonalIconButton onClick={onClick} toggle={toggle} disabled={disabled} selected={selected}>
      <Icon>{icon}</Icon>
      {selectedIcon && <Icon slot="selectedIcon">{selectedIcon}</Icon>}
    </FilledTonalIconButton>
  );
}
