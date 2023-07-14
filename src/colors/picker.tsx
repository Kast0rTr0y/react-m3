import * as React from 'react'

import { ChromePicker } from 'react-color';
import { CorePalette, Scheme, argbFromHex, applyTheme } from "@w3h/material-color-utilities"

const getTheme = () => {
    const primaryColor = window.localStorage.getItem('primaryColor') || '#6750A4';
    const secondaryColor = window.localStorage.getItem('secondaryColor') || '#958DA5';
    const tertiaryColor = window.localStorage.getItem('tertiaryColor') || '#B58392';
    const errorColor = window.localStorage.getItem('errorColor') || '#E46962';
    const neutralColor = window.localStorage.getItem('neutralColor') || '#938F96';
    const neutralVariantColor = window.localStorage.getItem('neutralVariantColor') || '#938F99';
    const palette = CorePalette.fromColors({
        primary:argbFromHex(primaryColor),
        secondary:argbFromHex(secondaryColor),
        tertiary:argbFromHex(tertiaryColor),
        error:argbFromHex(errorColor),
        neutral:argbFromHex(neutralColor),
        neutralVariant:argbFromHex(neutralVariantColor)
    });
    return {
        source:argbFromHex(primaryColor),
        schemes: {
            light: Scheme.lightFromCorePalette(palette),
            dark: Scheme.darkFromCorePalette(palette),
        },
        palettes: {
            primary: palette.a1,
            secondary: palette.a2,
            tertiary: palette.a3,
            neutral: palette.n1,
            neutralVariant: palette.n2,
            error: palette.error,
        },
        customColors: []
    };
}

const changeTheme = () => {
    const theme = getTheme();
    applyTheme(theme, {
        target: document.querySelector(":root") as HTMLElement,
        dark: window.matchMedia("(prefers-color-scheme: dark)").matches
    });
}

interface PickerProps {
    colorName: string
    defaultColor?: string
}

export default function Picker({colorName,defaultColor = "#0000FF"}:PickerProps) {
    const [color,setColor] = React.useState(window.localStorage.getItem(colorName) || defaultColor);
    return(
        <ChromePicker disableAlpha color={color}  onChange={(color)=>{
            setColor(color.hex);
            window.localStorage.setItem(colorName,color.hex);
            changeTheme();
        }}/>
    )
}

changeTheme()
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches }) => {
        if (matches) {
            changeTheme();
        } else {
            changeTheme();
        }
    });