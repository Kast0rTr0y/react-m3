import * as React from "react";
import OutlinedButton from "material/web/MdOutlinedButton";
import Icon from "material/web/MdIcon";

interface M3OutlinedButtonProps {
  trailingIcon?: boolean;
  children?: React.ReactNode;
  icon?: string;
}

export default function M3OutlinedButton({
  trailingIcon,
  children,
  icon
}: M3OutlinedButtonProps) {
  return (
    <OutlinedButton trailingIcon={trailingIcon}>
      {children}
      {icon && <Icon slot="icon">{icon}</Icon>}
    </OutlinedButton>
  );
}
