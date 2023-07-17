import * as React from "react";
import { MdOutlinedSegmentedButton } from "@material/web/labs/segmentedbutton/outlined-segmented-button";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-outlined-segmented-button",
  elementClass: MdOutlinedSegmentedButton,
  react: React
});
