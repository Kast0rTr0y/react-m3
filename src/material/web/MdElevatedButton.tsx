import * as React from "react";
import { MdElevatedButton } from "@material/web/button/elevated-button";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-elevated-button",
  elementClass: MdElevatedButton,
  react: React,
  events: {
    onclick: "click"
  }
});
