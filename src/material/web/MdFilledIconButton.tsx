import * as React from "react";
import { MdFilledIconButton } from "@material/web/iconbutton/filled-icon-button";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-filled-icon-button",
  elementClass: MdFilledIconButton,
  react: React,
  events: {
    onclick: "click"
  }
});
