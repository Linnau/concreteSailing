import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React from "react";
import { PropsWithChildren } from "react";

const palette = {
    primary: {
        main: blueGrey[500],
        dark: blueGrey[800],
        
    }
}

const theme = createTheme({
    palette,

})

export function WithTheme({children }: PropsWithChildren): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
        </ThemeProvider>
    )
}