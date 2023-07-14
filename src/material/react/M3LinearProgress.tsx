import * as React from "react";
import LinearProgress from "material/web/MdLinearProgress";

interface M3LinearProgressProps {
  progress?: number;
  indeterminate?: boolean;
}

export default function M3LinearProgress({
  progress,
  indeterminate
}: M3LinearProgressProps) {
  return <LinearProgress progress={progress} indeterminate={indeterminate} />;
}
