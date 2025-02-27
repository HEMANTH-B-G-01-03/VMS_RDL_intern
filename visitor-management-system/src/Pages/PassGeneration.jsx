import React from "react";
import { Button, Container, Typography, Paper } from "@mui/material";
import QrCodeIcon from "@mui/icons-material/QrCode";

const PassGeneration = () => {
    return (
        <Container>
            <Paper elevation={3} sx={{ padding: 3, marginTop: 4, textAlign: "center" }}>
                <Typography variant="h4" gutterBottom>Pass Generation</Typography>
                <Typography variant="body1">Your visitor pass has been generated.</Typography>
                <QrCodeIcon sx={{ fontSize: 100, marginTop: 2, color: "primary.main" }} />
                <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                    Download Pass
                </Button>
            </Paper>
        </Container>
    );
};

export default PassGeneration;
