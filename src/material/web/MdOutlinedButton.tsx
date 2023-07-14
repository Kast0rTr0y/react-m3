import * as React from "react";
import { MdOutlinedButton } from "@material/web/button/outlined-button";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-outlined-button",
  elementClass: MdOutlinedButton,
  react: React,
  events: {
    onclick: "click",
    onfocus: "focusin",
    onBlur: "focusout"
  }
});
