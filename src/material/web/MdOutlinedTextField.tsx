import * as React from "react";
import { MdOutlinedTextField } from "@material/web/textfield/outlined-text-field";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-outlined-text-field",
  elementClass: MdOutlinedTextField,
  react: React,
  events: {
    onChange: 'input'
  }
});
