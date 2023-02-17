import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

function Header(): JSX.Element {
    return (
        <AppBar>
            <Toolbar disableGutters >
                <Typography variant="h6" noWrap component="a" href="/">
                    Concrete Sailing
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;