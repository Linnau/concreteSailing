import { Box } from "@mui/material";
import { Routes } from "react-router-dom";
import React, { Component } from "react";
import { HEADER_HEIGHT } from "../shared/theme/theme";

export function AppContent(): JSX.Element {
    return (
        <Box
            height={`calc(100vh - ${HEADER_HEIGHT})`}            
            width="100%"
            sx={{
                background: "url('./images/bg.jpg')",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",                
                }}>
                    
                <Routes>
                    
                </Routes>
        </Box>
    )
}