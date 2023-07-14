import * as React from "react";
import { MdFilterChip } from "@material/web/chips/filter-chip";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-filter-chip",
  elementClass: MdFilterChip,
  react: React,
  events: {
    onclick: "click"
  }
});
