import * as React from "react";
import Slider from "material/web/MdSlider";

interface M3SliderProps {
  disabled?: boolean;
  labeled?: boolean;
  min?: number;
  max?: number;
  step?: number;
  range?: boolean;
  value?: number;
  valueLabel?: string;
  valueStart?: number;
  valueLabelStart?: string;
  valueLabelEnd?: string;
  valueEnd?: number;
  ticks?: boolean;
}

export default function M3Slider({
  disabled,
  labeled,
  min,
  max,
  step,
  range,
  value,
  valueLabel,
  valueStart,
  valueLabelStart,
  valueLabelEnd,
  valueEnd,
  ticks
}: M3SliderProps) {
  return (
    <Slider
      disabled={disabled}
      labeled={labeled}
      min={min}
      max={max}
      step={step}
      range={range}
      value={value}
      valueLabel={valueLabel}
      valueStart={valueStart}
      valueLabelStart={valueLabelStart}
      valueLabelEnd={valueLabelEnd}
      valueEnd={valueEnd}
      ticks={ticks}
    />
  );
}
