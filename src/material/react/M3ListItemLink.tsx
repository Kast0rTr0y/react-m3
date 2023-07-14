import * as React from "react";
import ListItemLink from "material/web/MdListItemLink";
import Icon from "material/web/MdIcon";

interface M3ListItemLinkProps {
  disabled?: boolean;
  href?: string;
  active?: boolean;
  noninteractive?: boolean;
  headline?: string;
  supportingText?: string;
  trailingSupportingText?: string;
  multiLineSupportingText?: boolean;
  iconStart?: string;
  iconEnd?: string;
}

export default function M3ListItemLink({
  disabled,
  href,
  active,
  noninteractive,
  headline,
  supportingText,
  trailingSupportingText,
  multiLineSupportingText,
  iconStart,
  iconEnd
}: M3ListItemLinkProps) {
  return (
    <ListItemLink
      disabled={disabled}
      href={href}
      active={active}
      noninteractive={noninteractive}
      headline={headline}
      supportingText={supportingText}
      trailingSupportingText={trailingSupportingText}
      multiLineSupportingText={multiLineSupportingText}
    >
      {iconStart && <Icon slot="start">{iconStart}</Icon>}
      {iconEnd && <Icon slot="end">{iconEnd}</Icon>}
    </ListItemLink>
  );
}
