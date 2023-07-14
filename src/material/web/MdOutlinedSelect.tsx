import * as React from "react";
import { MdOutlinedSelect } from "@material/web/select/outlined-select";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-outlined-select",
  elementClass: MdOutlinedSelect,
  react: React
});
