import * as React from "react";
import { MdListItemLink } from "@material/web/list/list-item-link";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-list-item-link",
  elementClass: MdListItemLink,
  react: React,
  events: {
    onclick: "click"
  }
});
