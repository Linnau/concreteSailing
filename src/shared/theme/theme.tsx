import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React from "react";
import { PropsWithChildren } from "react";

export const HEADER_HEIGHT = "60px";

const palette = {
    primary: {
        main: blueGrey[500],
        dark: blueGrey[800],

    }
}

const theme = createTheme({
    palette,
    typography: {
        fontFamily: "fantasy"

    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    position: "sticky",
                    backgroundColor: palette.primary.dark
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    height: HEADER_HEIGHT,
                }
            }
        }
    }

})

export function WithTheme({ children }: PropsWithChildren): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
        </ThemeProvider>
    )
}