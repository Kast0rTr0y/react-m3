import * as React from "react";
import { MdListItem } from "@material/web/list/list-item";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-list-item",
  elementClass: MdListItem,
  react: React,
  events: {
    onclick: "click"
  }
});
