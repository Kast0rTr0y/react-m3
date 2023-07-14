import * as React from "react";
import Tab from "material/web/MdTab";
import Icon from "material/web/MdIcon";

interface M3TabProps {
  inlineIcon?: boolean;
  children?: React.ReactNode;
  icon?: string;
}

export default function M3Tab({ inlineIcon, children, icon }: M3TabProps) {
  return (
    <Tab inlineIcon={inlineIcon}>
      {children}
      {icon && <Icon slot="icon">{icon}</Icon>}
    </Tab>
  );
}
