import * as React from "react";
import NavigationDrawer from "material/web/MdNavigationDrawer";

interface M3NavigationDrawerProps {
  children: React.ReactNode;
}

export default React.forwardRef(function M3Tabs({children}: M3NavigationDrawerProps,
  ref: React.ForwardedRef<any>
) {
  return <NavigationDrawer ref={ref}>{children}</NavigationDrawer>;
})
