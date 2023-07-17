import * as React from "react";
import FilledTextField, {MdFilledTextField} from "material/web/MdFilledTextField";
import {useRef} from "react";

interface M3FilledTextFieldProps {
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  label?: string;
  required?: boolean;
  value?: string;
  prefixText?: string;
  suffixText?: string;
  supportingText?: string;
  max?: string;
  maxLength?: number;
  min?: string;
  minLength?: number;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  onChange?: (e:any)=>void;
  style?: React.CSSProperties;
  type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
  step?: string;
  checkValidity?: (v:boolean)=>void
}

export default function M3FilledTextField({
  disabled, error, errorText, label, required, value = '', prefixText, suffixText, supportingText, max, maxLength = -1,
  min, minLength, pattern, placeholder, readOnly, onChange, style, type, step, checkValidity
}: M3FilledTextFieldProps) {
  const ref = useRef<MdFilledTextField>(null);
  function validate() {
    if(error === undefined) {
      ref.current?.reportValidity();
    }
    if(typeof checkValidity === 'function' && ref.current) checkValidity(ref.current.checkValidity());
  }
  React.useEffect(()=>{
    validate();
  },[value])
  return <FilledTextField ref={ref} style={style} onChange={onChange} type={type} step={step}
    label={label} error={error} errorText={errorText} disabled={disabled} required={required} value={value}
    prefixText={prefixText} suffixText={suffixText} supportingText={supportingText} max={max} maxLength={maxLength}
    min={min} minLength={minLength} pattern={pattern} placeholder={placeholder} readOnly={readOnly}
  />;
}
