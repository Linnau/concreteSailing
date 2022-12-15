import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

function ConcreteTopBar(): JSX.Element {
    return (
        <AppBar position="static" sx={{ backgroundColor: "primary.dark" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant="h6" noWrap component="a" href="/">
                        Concrete Sailing
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default ConcreteTopBar;