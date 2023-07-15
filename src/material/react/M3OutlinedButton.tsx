import * as React from "react";
import OutlinedButton from "material/web/MdOutlinedButton";
import Icon from "material/web/MdIcon";

interface M3OutlinedButtonProps {
  disabled?: boolean;
  trailingIcon?: boolean;
  children?: React.ReactNode;
  icon?: string;
  onClick?: ()=>void;
  type?: '' | 'submit' | 'reset';
}

export default function M3OutlinedButton({
  disabled,
  trailingIcon,
  children,
  icon,
  onClick,
  type
}: M3OutlinedButtonProps) {
  return (
    <OutlinedButton disabled={disabled} onClick={onClick} type={type} trailingIcon={trailingIcon}>
      {children}
      {icon && <Icon slot="icon">{icon}</Icon>}
    </OutlinedButton>
  );
}
