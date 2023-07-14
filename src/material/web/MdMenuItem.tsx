import * as React from "react";
import { MdMenuItem } from "@material/web/menu/menu-item";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-menu-item",
  elementClass: MdMenuItem,
  react: React,
  events: {
    onclick: "click"
  }
});
