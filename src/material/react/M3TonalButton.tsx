import * as React from "react";
import TonalButton from "material/web/MdTonalButton";
import Icon from "material/web/MdIcon";

interface M3TonalButtonProps {
  trailingIcon?: boolean;
  children: React.ReactNode;
  icon?: string;
}

export default function M3TonalButton({
  trailingIcon,
  children,
  icon
}: M3TonalButtonProps) {
  return (
    <TonalButton trailingIcon={trailingIcon}>
      {children}
      {icon && <Icon slot="icon">{icon}</Icon>}
    </TonalButton>
  );
}
