import * as React from "react";
import { MdDivider } from "@material/web/divider/divider";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-divider",
  elementClass: MdDivider,
  react: React
});
