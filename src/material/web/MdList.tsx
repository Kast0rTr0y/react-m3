import * as React from "react";
import { MdList } from "@material/web/list/list";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-list",
  elementClass: MdList,
  react: React,
  events: {
    onclick: "click"
  }
});
