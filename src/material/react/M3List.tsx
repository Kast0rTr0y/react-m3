import * as React from "react";
import List from "material/web/MdList";

interface M3ListProps {
  children?: React.ReactNode;
}

export default function M3List({ children }: M3ListProps) {
  return <List>{children}</List>;
}
