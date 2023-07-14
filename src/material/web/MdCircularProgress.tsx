import * as React from "react";
import { MdCircularProgress } from "@material/web/circularprogress/circular-progress";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-circular-progress",
  elementClass: MdCircularProgress,
  react: React,
  events: {
    onclick: "click"
  }
});
