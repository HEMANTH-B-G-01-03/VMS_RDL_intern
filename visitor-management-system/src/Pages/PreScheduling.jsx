import React from "react";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";

const PreScheduling = () => {
    return (
        <Container>
            <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
                <Typography variant="h4" gutterBottom>Pre-Scheduling</Typography>
                <TextField label="Visitor Name" fullWidth margin="normal" />
                <TextField label="Date & Time" fullWidth margin="normal" type="datetime-local" />
                <Button variant="contained" color="primary" fullWidth>Schedule Visit</Button>
            </Paper>
        </Container>
    );
};

export default PreScheduling;
