import * as React from "react";
import { MdStandardIconButton } from "@material/web/iconbutton/standard-icon-button";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-standard-icon-button",
  elementClass: MdStandardIconButton,
  react: React,
  events: {
    onclick: "click"
  }
});
