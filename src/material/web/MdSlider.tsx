import * as React from "react";
import { MdSlider } from "@material/web/slider/slider";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-slider",
  elementClass: MdSlider,
  react: React,
  events: {
    onclick: "click"
  }
});
