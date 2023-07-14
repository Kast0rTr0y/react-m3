import * as React from "react";
import Menu from "material/web/MdMenu";

interface M3MenuProps {
  children?: React.ReactNode[];
  ancorRef?: any;
  open?: boolean;
  xOffset?: number;
  yOffset?: number;
}

export default React.forwardRef(function M3Menu(
  props: M3MenuProps,
  ref: React.ForwardedRef<any>
) {
  const { ancorRef } = props;
  React.useEffect(() => {
    if(ref) { // @ts-ignore
      ref.current.anchor = ancorRef.current;
    }
  }, [ref, ancorRef]);
  return (
    <Menu ref={ref} xOffset={props.xOffset} yOffset={props.yOffset}>
      {props.children}
    </Menu>
  );
});
