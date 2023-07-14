import * as React from "react";
import { MdAssistChip } from "@material/web/chips/assist-chip";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-assist-chip",
  elementClass: MdAssistChip,
  react: React,
  events: {
    onclick: "click"
  }
});
