import * as React from "react";
import Switch from "material/web/MdSwitch";

interface M3SwitchProps {
  selected?: boolean;
  showIcon?: boolean;
}

export default function M3Switch({ selected, showIcon }: M3SwitchProps) {
  return <Switch selected={selected} showOnlySelectedIcon={showIcon} />;
}
