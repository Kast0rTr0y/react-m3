import * as React from "react";
import StandardIconButton from "material/web/MdStandardIconButton";
import Icon from "material/web/MdIcon";

interface M3StandardIconButtonProps {
  disabled?: boolean;
  toggle?: boolean;
  selected?: boolean;
  icon: string;
  selectedIcon?: string;
  onClick?: () => void;
}

export default function M3StandardIconButton({
  disabled,
  toggle,
  selected,
  icon,
  selectedIcon,
  onClick
}: M3StandardIconButtonProps) {
  return (
    <StandardIconButton onClick={onClick} toggle={toggle} disabled={disabled} selected={selected}>
      <Icon>{icon}</Icon>
      {selectedIcon && <Icon slot="selectedIcon">{selectedIcon}</Icon>}
    </StandardIconButton>
  );
}
