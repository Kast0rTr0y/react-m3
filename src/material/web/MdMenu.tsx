import * as React from "react";
import { MdMenu } from "@material/web/menu/menu";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-menu",
  elementClass: MdMenu,
  react: React,
  events: {
    onclick: "click"
  }
});
