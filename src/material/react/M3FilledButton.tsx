import * as React from "react";
import FilledButton from "material/web/MdFilledButton";
import Icon from "material/web/MdIcon";

interface M3FilledButtonProps {
  onClick?: () => void;
  trailingIcon?: boolean;
  children?: React.ReactNode;
  icon?: string;
}

export default function M3FilledButton({
  onClick,
  trailingIcon,
  children,
  icon
}: M3FilledButtonProps) {
  return (
    <FilledButton onClick={onClick} trailingIcon={trailingIcon}>
      {children}
      {icon && <Icon slot="icon">{icon}</Icon>}
    </FilledButton>
  );
}
