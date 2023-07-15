import * as React from "react";
import LinearProgress from "material/web/MdLinearProgress";

interface M3LinearProgressProps {
  progress?: number;
  indeterminate?: boolean;
  buffer?: number;
  fourColor?: boolean;
}

export default function M3LinearProgress({
  progress,
  indeterminate,
  buffer,
  fourColor
}: M3LinearProgressProps) {
  return <LinearProgress progress={progress} indeterminate={indeterminate} buffer={buffer} fourColor={fourColor}/>;
}
