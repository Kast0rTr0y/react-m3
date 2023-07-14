import * as React from "react";
import Fab, { Variant, FabSize } from "material/web/MdFab";
import Icon from "material/web/MdIcon";

interface M3TextButtonProps {
  variant?: Variant;
  size?: FabSize;
  lowered?: boolean;
  icon?: string;
}

export default function M3TextButton({
  variant,
  size,
  lowered,
  icon
}: M3TextButtonProps) {
  return (
    <Fab variant={variant} size={size} lowered={lowered}>
      {icon && <Icon slot="icon">{icon}</Icon>}
    </Fab>
  );
}
