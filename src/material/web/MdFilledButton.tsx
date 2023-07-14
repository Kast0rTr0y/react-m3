import * as React from "react";
import { MdFilledButton } from "@material/web/button/filled-button";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-filled-button",
  elementClass: MdFilledButton,
  react: React,
  events: {
    onclick: "click"
  }
});
