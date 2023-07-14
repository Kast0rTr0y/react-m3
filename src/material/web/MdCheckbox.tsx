import * as React from "react";
import { MdCheckbox } from "@material/web/checkbox/checkbox";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-checkbox",
  elementClass: MdCheckbox,
  react: React,
  events: {
    onclick: "click"
  }
});
