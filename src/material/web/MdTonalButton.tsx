import * as React from "react";
import { MdTonalButton } from "@material/web/button/tonal-button";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-tonal-button",
  elementClass: MdTonalButton,
  react: React,
  events: {
    onclick: "click"
  }
});
