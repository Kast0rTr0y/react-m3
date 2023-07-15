import * as React from "react";
import FilledButton from "material/web/MdFilledButton";
import Icon from "material/web/MdIcon";

interface M3FilledButtonProps {
  disabled?: boolean;
  trailingIcon?: boolean;
  children?: React.ReactNode;
  icon?: string;
  onClick?: ()=>void;
  type?: '' | 'submit' | 'reset';
}

export default function M3FilledButton({
  disabled,
  trailingIcon,
  children,
  icon,
  onClick,
  type
}: M3FilledButtonProps) {
  return (
    <FilledButton type={type} disabled={disabled} onClick={onClick} trailingIcon={trailingIcon}>
      {children}
      {icon && <Icon slot="icon">{icon}</Icon>}
    </FilledButton>
  );
}
