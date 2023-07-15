import * as React from "react";
import TonalButton from "material/web/MdTonalButton";
import Icon from "material/web/MdIcon";

interface M3TonalButtonProps {
  disabled?: boolean;
  trailingIcon?: boolean;
  children: React.ReactNode;
  icon?: string;
  onClick?: ()=>void;
  type?: '' | 'submit' | 'reset';
}

export default function M3TonalButton({
  disabled,
  trailingIcon,
  children,
  icon,
  onClick,
  type
}: M3TonalButtonProps) {
  return (
    <TonalButton disabled={disabled} onClick={onClick} type={type} trailingIcon={trailingIcon}>
      {children}
      {icon && <Icon slot="icon">{icon}</Icon>}
    </TonalButton>
  );
}
