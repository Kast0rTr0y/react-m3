import * as React from "react";
import TextButton from "material/web/MdTextButton";
import Icon from "material/web/MdIcon";

interface M3TextButtonProps {
  trailingIcon?: boolean;
  children: React.ReactNode;
  icon?: string;
}

export default function M3TextButton({
  trailingIcon,
  children,
  icon
}: M3TextButtonProps) {
  return (
    <TextButton trailingIcon={trailingIcon}>
      {children}
      {icon && <Icon slot="icon">{icon}</Icon>}
    </TextButton>
  );
}
