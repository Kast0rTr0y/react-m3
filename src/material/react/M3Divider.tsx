import * as React from "react";
import Divider from "material/web/MdDivider";

interface M3RadioProps {
  inset?: boolean;
  insetStart?: boolean;
  insetEnd?: boolean;
}

export default function M3Radio({ inset, insetStart, insetEnd }: M3RadioProps) {
  return <Divider inset={inset} insetStart={insetStart} insetEnd={insetEnd} />;
}
