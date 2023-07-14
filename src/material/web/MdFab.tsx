import * as React from "react";
import { MdFab, Variant, FabSize } from "@material/web/fab/fab";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-fab",
  elementClass: MdFab,
  react: React,
  events: {
    onclick: "click"
  }
});

export { Variant, FabSize };
