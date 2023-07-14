import * as React from "react";
import { MdSelectOption } from "@material/web/select/select-option";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-select-option",
  elementClass: MdSelectOption,
  react: React
});
