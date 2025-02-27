import React from "react";
import { Typography, Container, Paper, Box } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Dashboard = () => {
    return (
        <Container
            maxWidth="md"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "90vh",
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 4,
                    background: "linear-gradient(135deg, #42A5F5 30%, #1565C0 90%)",
                    color: "white",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <DashboardIcon sx={{ fontSize: 80, color: "white" }} />
                </Box>

                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                    Visitor Management Dashboard
                </Typography>
                
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                    Welcome! Manage visitor check-ins, tracking, and security efficiently.
                </Typography>
            </Paper>
        </Container>
    );
};

export default Dashboard;
