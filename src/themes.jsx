import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: "#ffffff",
    fontColor: "#000"
}

export const darkTheme = {
    body: "#212121",
    fontColor: "#ffffff"
}

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.fontColor}
    }
`