import * as React from "react";
import { MdFilledTonalIconButton } from "@material/web/iconbutton/filled-tonal-icon-button";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-filled-tonal-icon-button",
  elementClass: MdFilledTonalIconButton,
  react: React,
  events: {
    onclick: "click"
  }
});
