import * as React from "react";
import ElevatedButton from "material/web/MdElevatedButton";
import Icon from "material/web/MdIcon";

interface M3ElevatedButtonProps {
  trailingIcon?: boolean;
  children?: React.ReactNode;
  icon?: string;
}

export default function M3ElevatedButton({
  trailingIcon,
  children,
  icon
}: M3ElevatedButtonProps) {
  return (
    <ElevatedButton trailingIcon={trailingIcon}>
      {children}
      {icon && <Icon slot="icon">{icon}</Icon>}
    </ElevatedButton>
  );
}
