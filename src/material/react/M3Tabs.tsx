import * as React from "react";
import Tabs from "material/web/MdTabs";

interface M3TabsProps {
  children: React.ReactNode;
}

export default function M3Tabs({ children }: M3TabsProps) {
  return <Tabs>{children}</Tabs>;
}
