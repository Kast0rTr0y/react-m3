import * as React from "react";
import Switch from "material/web/MdSwitch";

interface M3SwitchProps {
  disabled?: boolean;
  selected?: boolean;
  showIcon?: boolean;
  icons?: boolean;
  value?: string;
  onClick?: ()=>void;
}

export default function M3Switch({ disabled, selected, showIcon, icons, value, onClick }: M3SwitchProps) {
  return <Switch onClick={onClick} disabled={disabled} selected={selected} showOnlySelectedIcon={showIcon} icons={icons} value={value} />;
}
