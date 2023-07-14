import * as React from "react";
import SelectOption from "material/web/MdSelectOption";

interface M3SelectOptionProps {
  headline?: string;
  selected?: boolean;
  value?: string;
}

export default function M3SelectOption({
  headline,
  selected,
  value
}: M3SelectOptionProps) {
  return <SelectOption headline={headline} selected={selected} value={value} />;
}
