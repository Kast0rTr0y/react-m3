import * as React from "react";
import CircularProgress from "material/web/MdCircularProgress";
import {CSSProperties} from "react";

interface M3LinearProgressProps {
  progress?: number;
  indeterminate?: boolean;
  fourColor?: boolean;
  style?: CSSProperties
}

export default function M3LinearProgress({
  progress,
  indeterminate,
  fourColor,
  style
}: M3LinearProgressProps) {
  return <CircularProgress style={style} progress={progress} indeterminate={indeterminate} fourColor={fourColor} />;
}
