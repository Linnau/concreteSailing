import { Phone } from "@mui/icons-material";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Header(): JSX.Element {

    return (
        <AppBar>
            <Stack direction={"row"} spacing={2} justifyContent={"end"} marginRight={10} marginTop={3}>
                <Phone fontSize="small" />+45 1234 5678
                <Phone fontSize="small" />+45 1234 5678
            </Stack>

            <Toolbar disableGutters >
                <Box display={"flex"} marginLeft={20} justifyContent={"center"}>
                    <Button disableRipple href="/">
                        <Typography variant="h5" color={"white"} noWrap>
                            CONCRETESAILING.COM
                        </Typography>
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;