import * as React from "react";
import MdFilledField from "material/web/MdFilledField";
import Icon from "material/web/MdIcon";

interface M3TextButtonProps {
  disabled?: boolean;
  supportingText?: string;
  label?: string;
  startIcon?: string;
  endIcon?: string;
}

export default function M3TextButton({
  disabled,
  supportingText,
  label,
  startIcon,
  endIcon
}: M3TextButtonProps) {
  const [focused, setFocused] = React.useState(false);
  const [value, setValue] = React.useState("");
  const ref = React.useRef<HTMLInputElement>(null);
  return (
    <MdFilledField
      disabled={disabled}
      style={{ cursor: disabled ? "" : "text" }}
      supportingText={supportingText}
      label={label}
      hasStart={startIcon !== undefined}
      hasEnd={endIcon !== undefined}
      focused={focused}
      populated={value !== ""}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onClick={() => {
        setFocused(true);
        ref.current?.focus();
      }}
    >
      {startIcon && <Icon slot="start">{startIcon}</Icon>}
      <input
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        style={{ outline: "none", border: "none", background: "transparent" }}
      />
      {endIcon && <Icon slot="end">{endIcon}</Icon>}
    </MdFilledField>
  );
}
