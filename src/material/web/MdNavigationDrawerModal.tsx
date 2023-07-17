import * as React from "react";
import { MdNavigationDrawerModal } from "@material/web/labs/navigationdrawer/navigation-drawer-modal";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-navigation-drawer-modal",
  elementClass: MdNavigationDrawerModal,
  react: React,
  events: {
    onclick: "click"
  }
});
