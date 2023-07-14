import * as React from "react";
import { MdTab } from "@material/web/tabs/tab";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-tab",
  elementClass: MdTab,
  react: React,
  events: {
    onclick: "click"
  }
});
