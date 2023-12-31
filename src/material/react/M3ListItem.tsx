import * as React from "react";
import ListItem from "material/web/MdListItem";
import Icon from "material/web/MdIcon";

interface M3ListItemProps {
  disabled?: boolean;
  active?: boolean;
  noninteractive?: boolean;
  headline?: string;
  supportingText?: string;
  trailingSupportingText?: string;
  multiLineSupportingText?: boolean;
  iconStart?: string;
  iconEnd?: string;
  itemTabIndex?: number;
  type?: 'listitem' | 'menuitem' | 'option' | 'link' | 'none';
}

export default function M3ListItem({
  disabled,
  active,
  noninteractive,
  headline,
  supportingText,
  trailingSupportingText,
  multiLineSupportingText,
  iconStart,
  iconEnd,
  itemTabIndex,
  type
}: M3ListItemProps) {
  return (
    <ListItem
      disabled={disabled}
      active={active}
      noninteractive={noninteractive}
      headline={headline}
      supportingText={supportingText}
      trailingSupportingText={trailingSupportingText}
      multiLineSupportingText={multiLineSupportingText}
      itemTabIndex={itemTabIndex}
      type={type}
    >
      {iconStart && <Icon slot="start">{iconStart}</Icon>}
      {iconEnd && <Icon slot="end">{iconEnd}</Icon>}
    </ListItem>
  );
}
