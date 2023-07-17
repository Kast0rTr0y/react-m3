import * as React from "react";
import NavigationDrawerModal from "material/web/MdNavigationDrawerModal";

interface M3NavigationDrawerModalProps {
  children: React.ReactNode;
}

export default React.forwardRef(function M3Tabs({children}: M3NavigationDrawerModalProps,
  ref: React.ForwardedRef<any>
) {
  return <NavigationDrawerModal ref={ref}>{children}</NavigationDrawerModal>;
})
