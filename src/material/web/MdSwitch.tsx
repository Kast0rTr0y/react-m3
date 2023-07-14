import * as React from "react";
import { MdSwitch } from "@material/web/switch/switch";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-switch",
  elementClass: MdSwitch,
  react: React,
  events: {
    onclick: "click"
  }
});
