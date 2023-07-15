import * as React from "react";
import Tab from "material/web/MdTab";
import Icon from "material/web/MdIcon";

interface M3TabProps {
  variant?: '' | 'primary' | 'secondary' | 'primary vertical' | 'secondary vertical' | 'vertical secondary' | 'vertical primary';
  disabled?: boolean;
  selected?: boolean;
  focusable?: boolean;
  inlineIcon?: boolean;
  children?: React.ReactNode;
  icon?: string;
}

export default function M3Tab({ inlineIcon, children, icon, variant = '', disabled, selected, focusable }: M3TabProps) {
  return (
    <Tab variant={variant} inlineIcon={inlineIcon} disabled={disabled} selected={selected} focusable={focusable}>
      {children}
      {icon && <Icon slot="icon">{icon}</Icon>}
    </Tab>
  );
}
