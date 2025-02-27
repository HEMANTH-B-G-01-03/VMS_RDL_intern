import React, { useState } from "react";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";

const Visitor = () => {
    const [visitor, setVisitor] = useState({
        name: "",
        phone: "",
        visitPurpose: "",
    });

    const handleChange = (e) => {
        setVisitor({ ...visitor, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Visitor Details Submitted:", visitor);
        // Here, you can integrate API to store visitor details in the backend
    };

    return (
        <Container>
            <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
                <Typography variant="h4" gutterBottom>Visitor Check-In</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Full Name"
                        name="name"
                        value={visitor.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Phone Number"
                        name="phone"
                        value={visitor.phone}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Purpose of Visit"
                        name="visitPurpose"
                        value={visitor.visitPurpose}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Visitor;
