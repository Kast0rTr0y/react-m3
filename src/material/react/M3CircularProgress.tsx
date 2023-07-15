import * as React from "react";
import CircularProgress from "material/web/MdCircularProgress";
import {CSSProperties} from "react";

interface M3LinearProgressProps {
  progress?: number;
  indeterminate?: boolean;
  style?: CSSProperties
}

export default function M3LinearProgress({
  progress,
  indeterminate,
  style
}: M3LinearProgressProps) {
  return <CircularProgress style={style} progress={progress} indeterminate={indeterminate} />;
}
