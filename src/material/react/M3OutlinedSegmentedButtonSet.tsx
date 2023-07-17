import * as React from "react";
import OutlinedSegmentedButtonSet from "material/web/MdOutlinedSegmentedButtonSet";

interface M3OutlinedSegmentedButtonSetProps {
  children: React.ReactNode;
}

export default function M3OutlinedSegmentedButtonSet({ children }: M3OutlinedSegmentedButtonSetProps) {
  return <OutlinedSegmentedButtonSet>{children}</OutlinedSegmentedButtonSet>;
}
