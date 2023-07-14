import * as React from "react";
import { MdLinearProgress } from "@material/web/linearprogress/linear-progress";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-linear-progress",
  elementClass: MdLinearProgress,
  react: React,
  events: {
    onclick: "click"
  }
});
