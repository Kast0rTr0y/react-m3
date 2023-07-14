import * as React from "react";
import { MdSuggestionChip } from "@material/web/chips/suggestion-chip";
import { createComponent } from "@lit-labs/react";

export default createComponent({
  tagName: "md-suggestion-chip",
  elementClass: MdSuggestionChip,
  react: React,
  events: {
    onclick: "click"
  }
});
