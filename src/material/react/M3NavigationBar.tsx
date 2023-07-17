import * as React from "react";
import NavigationBar from "material/web/MdNavigationBar";

interface M3NavigationBarProps {
  children: React.ReactNode;
}

export default function M3Tabs({children}: M3NavigationBarProps) {
  return <NavigationBar>{children}</NavigationBar>;
}
