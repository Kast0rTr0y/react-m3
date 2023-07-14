import * as React from "react";
import { MdTextButton } from "@material/web/button/text-button";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-text-button",
  elementClass: MdTextButton,
  react: React,
  events: {
    onclick: "click"
  }
});
