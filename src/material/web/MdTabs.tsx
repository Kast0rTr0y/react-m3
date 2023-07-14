import * as React from "react";
import { MdTabs } from "@material/web/tabs/tabs";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-tabs",
  elementClass: MdTabs,
  react: React,
  events: {
    onclick: "click"
  }
});
