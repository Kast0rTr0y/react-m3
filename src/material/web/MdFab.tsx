import * as React from "react";
import { MdFab } from "@material/web/fab/fab";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-fab",
  elementClass: MdFab,
  react: React,
  events: {
    onclick: "click"
  }
});
