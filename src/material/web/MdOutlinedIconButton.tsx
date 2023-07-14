import * as React from "react";
import { MdOutlinedIconButton } from "@material/web/iconbutton/outlined-icon-button";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-outlined-icon-button",
  elementClass: MdOutlinedIconButton,
  react: React,
  events: {
    onclick: "click"
  }
});
