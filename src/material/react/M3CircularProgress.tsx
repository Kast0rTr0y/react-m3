import * as React from "react";
import CircularProgress from "material/web/MdCircularProgress";

interface M3LinearProgressProps {
  progress?: number;
  indeterminate?: boolean;
}

export default function M3LinearProgress({
  progress,
  indeterminate
}: M3LinearProgressProps) {
  return <CircularProgress progress={progress} indeterminate={indeterminate} />;
}
