import * as React from "react";
import MdChipSet from "material/web/MdChipSet";

interface M3ChipSetProps {
  children?: React.ReactNode;
  type?: 'assist' | 'suggestion' | 'filter' | 'input' | '';
  singleSelect?: boolean
}

export default function M3ChipSet({children, type, singleSelect}: M3ChipSetProps) {
  return <MdChipSet type={type} singleSelect={singleSelect}>{children}</MdChipSet>;
}
