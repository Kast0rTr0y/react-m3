import * as React from "react";
import { MdFilledSelect } from "@material/web/select/filled-select";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-filled-select",
  elementClass: MdFilledSelect,
  react: React
});
