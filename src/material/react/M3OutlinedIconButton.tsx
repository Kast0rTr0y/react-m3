import * as React from "react";
import OutlinedIconButton from "material/web/MdOutlinedIconButton";
import Icon from "material/web/MdIcon";

interface M3OutlinedIconButtonProps {
  disabled?: boolean;
  toggle?: boolean;
  selected?: boolean;
  icon: string;
  selectedIcon?: string;
  onClick?: () => void;
}

export default function M3OutlinedIconButton({
  disabled,
  toggle,
  selected,
  icon,
  selectedIcon,
  onClick
}: M3OutlinedIconButtonProps) {
  return (
    <OutlinedIconButton onClick={onClick} toggle={toggle} disabled={disabled} selected={selected}>
      <Icon>{icon}</Icon>
      {selectedIcon && <Icon slot="selectedIcon">{selectedIcon}</Icon>}
    </OutlinedIconButton>
  );
}
