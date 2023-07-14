import * as React from "react";
import { MdRadio } from "@material/web/radio/radio";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-radio",
  elementClass: MdRadio,
  react: React,
  events: {
    onclick: "click"
  }
});
