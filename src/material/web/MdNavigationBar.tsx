import * as React from "react";
import { MdNavigationBar } from "@material/web/labs/navigationbar/navigation-bar";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-navigation-bar",
  elementClass: MdNavigationBar,
  react: React
});
