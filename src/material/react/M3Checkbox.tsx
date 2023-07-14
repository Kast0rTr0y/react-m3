import * as React from "react";
import MdCheckbox from "material/web/MdCheckbox";

interface M3TextButtonProps {
  checked?: boolean;
  indeterminate?: boolean;
}

export default function M3TextButton({
  checked,
  indeterminate
}: M3TextButtonProps) {
  return <MdCheckbox checked={checked} indeterminate={indeterminate} />;
}
