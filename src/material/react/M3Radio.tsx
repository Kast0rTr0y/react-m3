import * as React from "react";
import Radio from "material/web/MdRadio";

interface M3RadioProps {
  checked?: boolean;
  disabled?: boolean;
  value?: string;
  onClick?: ()=>void;
}

export default function M3Radio({ checked, disabled, value, onClick }: M3RadioProps) {
  return <Radio onClick={onClick} checked={checked} disabled={disabled} value={value} />;
}
