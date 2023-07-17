import * as React from "react";
import { MdNavigationDrawer } from "@material/web/labs/navigationdrawer/navigation-drawer";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-navigation-drawer",
  elementClass: MdNavigationDrawer,
  react: React
});
