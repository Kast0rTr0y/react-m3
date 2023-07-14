import * as React from "react";
import Menu from "material/web/MdMenu";

interface M3Menu {
  children?: React.ReactNode[];
  ancorRef?: any;
  open?: boolean;
  xOffset?: number;
  yOffset?: number;
}

export default React.forwardRef(function M3Menu(
  props: M3Menu,
  ref: React.ForwardedRef<any>
) {
  const { ancorRef } = props;
  React.useEffect(() => {
    ref.current.anchor = ancorRef?.current;
  }, [ref, ancorRef]);
  return (
    <Menu ref={ref} xOffset={props.xOffset} yOffset={props.yOffset}>
      {props.children}
    </Menu>
  );
});
