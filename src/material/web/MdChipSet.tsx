import * as React from "react";
import { MdChipSet } from "@material/web/chips/chip-set";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-chip-set",
  elementClass: MdChipSet,
  react: React
});
