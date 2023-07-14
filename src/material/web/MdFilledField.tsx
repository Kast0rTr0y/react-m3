import * as React from "react";
import { MdFilledField } from "@material/web/field/filled-field";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-filled-field",
  elementClass: MdFilledField,
  react: React,
  events: {
    onchange: "change"
  }
});
