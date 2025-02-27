import React from "react";
import { Button, Container, Typography, Paper } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const HostNotification = () => {
    return (
        <Container>
            <Paper elevation={3} sx={{ padding: 3, marginTop: 4, textAlign: "center" }}>
                <Typography variant="h4" gutterBottom>Host Notification</Typography>
                <Typography variant="body1">The host has been notified of the visitor's arrival.</Typography>
                <NotificationsActiveIcon sx={{ fontSize: 60, marginTop: 2, color: "secondary.main" }} />
                <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                    OK
                </Button>
            </Paper>
        </Container>
    );
};

export default HostNotification;
