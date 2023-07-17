import * as React from "react";
import NavigationTab from "material/web/MdNavigationTab";

interface M3NavigationTabProps {
  disabled?: boolean;
  active?: boolean;
  hideInactiveLabel?: boolean;
  label: string;
  badgeValue?: string;
  showBadge?: boolean;
}

export default function M3NavigationTab({disabled, active, hideInactiveLabel, label, badgeValue, showBadge}: M3NavigationTabProps) {
  return <NavigationTab disabled={disabled} active={active} hideInactiveLabel={hideInactiveLabel} label={label} badgeValue={badgeValue} showBadge={showBadge}/>;
}
