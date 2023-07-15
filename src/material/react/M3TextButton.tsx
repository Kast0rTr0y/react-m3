import * as React from "react";
import TextButton from "material/web/MdTextButton";
import Icon from "material/web/MdIcon";

interface M3TextButtonProps {
  disabled?: boolean;
  trailingIcon?: boolean;
  children: React.ReactNode;
  icon?: string;
  onClick?: ()=>void;
  type?: '' | 'submit' | 'reset';
}

export default function M3TextButton({
  disabled,
  trailingIcon,
  children,
  icon,
  onClick,
  type
}: M3TextButtonProps) {
  return (
    <TextButton disabled={disabled} onClick={onClick} type={type} trailingIcon={trailingIcon}>
      {children}
      {icon && <Icon slot="icon">{icon}</Icon>}
    </TextButton>
  );
}
