import * as React from "react";
import StandardIconButton from "material/web/MdStandardIconButton";
import Icon from "material/web/MdIcon";

interface M3StandardIconButtonProps {
  disabled?: boolean;
  icon: string;
}

export default function M3StandardIconButton({
  disabled,
  icon
}: M3StandardIconButtonProps) {
  return (
    <StandardIconButton disabled={disabled}>
      <Icon>{icon}</Icon>
    </StandardIconButton>
  );
}
