import * as React from "react";
import Fab from "material/web/MdFab";
import Icon from "material/web/MdIcon";

interface M3TextButtonProps {
  variant?: 'surface' | 'primary' | 'secondary' | 'tertiary';
  size?: 'medium' | 'small' | 'large';
  lowered?: boolean;
  icon?: string;
  label?: string;
}

export default function M3TextButton({
  variant,
  size,
  lowered,
  icon,
  label
}: M3TextButtonProps) {
  return (
    <Fab variant={variant} size={size} lowered={lowered} label={label}>
      {icon && <Icon slot="icon">{icon}</Icon>}
    </Fab>
  );
}
