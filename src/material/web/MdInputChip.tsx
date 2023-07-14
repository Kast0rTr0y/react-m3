import * as React from "react";
import { MdInputChip } from "@material/web/chips/input-chip";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-input-chip",
  elementClass: MdInputChip,
  react: React,
  events: {
    onclick: "click"
  }
});
