import React from "react";
import { Typography, Container, Paper } from "@mui/material";

const VisitorTracking = () => {
    return (
        <Container>
            <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
                <Typography variant="h4" gutterBottom>Visitor Tracking</Typography>
                <Typography variant="body1">
                    Live tracking enabled. Visitors are being monitored in real-time.
                </Typography>
            </Paper>
        </Container>
    );
};

export default VisitorTracking;
