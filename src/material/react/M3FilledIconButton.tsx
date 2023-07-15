import * as React from "react";
import FilledIconButton from "material/web/MdFilledIconButton";
import Icon from "material/web/MdIcon";

interface M3FilledIconButtonProps {
  disabled?: boolean;
  toggle?: boolean;
  selected?: boolean;
  icon: string;
  selectedIcon?: string;
  onClick?: () => void;
}

export default function M3FilledIconButton({
  disabled,
  toggle,
  selected,
  icon,
  selectedIcon,
  onClick
}: M3FilledIconButtonProps) {
  return (
    <FilledIconButton onClick={onClick} toggle={toggle} disabled={disabled} selected={selected}>
      <Icon>{icon}</Icon>
      {selectedIcon && <Icon slot="selectedIcon">{selectedIcon}</Icon>}
    </FilledIconButton>
  );
}
