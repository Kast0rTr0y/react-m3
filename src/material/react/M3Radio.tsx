import * as React from "react";
import Radio from "material/web/MdRadio";

interface M3RadioProps {
  checked?: boolean;
  disabled?: boolean;
}

export default function M3Radio({ checked, disabled }: M3RadioProps) {
  return <Radio checked={checked} disabled={disabled} />;
}
