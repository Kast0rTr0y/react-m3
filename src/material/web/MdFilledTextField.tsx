import * as React from "react";
import { MdFilledTextField } from "@material/web/textfield/filled-text-field";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-filled-text-field",
  elementClass: MdFilledTextField,
  react: React
});
