import * as React from "react";
import ElevatedButton from "material/web/MdElevatedButton";
import Icon from "material/web/MdIcon";

interface M3ElevatedButtonProps {
  disabled?: boolean;
  trailingIcon?: boolean;
  children?: React.ReactNode;
  icon?: string;
  onClick?: ()=>void;
  type?: '' | 'submit' | 'reset';
}

export default function M3ElevatedButton({
  disabled,
  trailingIcon,
  children,
  icon,
  onClick,
  type
}: M3ElevatedButtonProps) {
  return (
    <ElevatedButton type={type} disabled={disabled} onClick={onClick} trailingIcon={trailingIcon}>
      {children}
      {icon && <Icon slot="icon">{icon}</Icon>}
    </ElevatedButton>
  );
}
