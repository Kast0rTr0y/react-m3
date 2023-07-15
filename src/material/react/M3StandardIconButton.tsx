import * as React from "react";
import StandardIconButton, {MdStandardIconButton} from "material/web/MdStandardIconButton";
import Icon from "material/web/MdIcon";

interface M3StandardIconButtonProps {
  disabled?: boolean;
  toggle?: boolean;
  icon: string;
  selectedIcon?: string;
  onClick?: () => void;
}

export default function M3StandardIconButton({
  disabled,
  toggle,
  icon,
  selectedIcon,
  onClick
}: M3StandardIconButtonProps) {
  return (<>
    <StandardIconButton onClick={onClick} toggle={toggle} disabled={disabled}>
      <Icon>{icon}</Icon>
      {selectedIcon && <Icon slot="selectedIcon">{selectedIcon}</Icon>}
    </StandardIconButton>
  </>);
}
