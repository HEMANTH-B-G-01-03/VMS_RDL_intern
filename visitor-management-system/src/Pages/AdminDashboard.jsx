import React from "react";
import { Container, Typography, Paper, Grid, Box } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GroupIcon from "@mui/icons-material/Group";
import BadgeIcon from "@mui/icons-material/Badge";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const AdminDashboard = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h3" align="center" sx={{ fontWeight: "bold", color: "#1565C0", mb: 3 }}>
                Admin Dashboard
            </Typography>

            {/* Dashboard Overview */}
            <Grid container spacing={3}>
                {/* Card 1: Visitors */}
                <Grid item xs={12} md={4}>
                    <Paper
                        elevation={6}
                        sx={{
                            padding: 3,
                            background: "linear-gradient(135deg, #FF6B6B 30%, #FFA726 90%)",
                            color: "white",
                            textAlign: "center",
                            borderRadius: 4,
                        }}
                    >
                        <GroupIcon sx={{ fontSize: 70 }} />
                        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 1 }}>Total Visitors</Typography>
                        <Typography variant="h4" sx={{ fontWeight: "bold" }}>1,245</Typography>
                    </Paper>
                </Grid>

                {/* Card 2: Hosts */}
                <Grid item xs={12} md={4}>
                    <Paper
                        elevation={6}
                        sx={{
                            padding: 3,
                            background: "linear-gradient(135deg, #42A5F5 30%, #1976D2 90%)",
                            color: "white",
                            textAlign: "center",
                            borderRadius: 4,
                        }}
                    >
                        <BadgeIcon sx={{ fontSize: 70 }} />
                        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 1 }}>Total Hosts</Typography>
                        <Typography variant="h4" sx={{ fontWeight: "bold" }}>350</Typography>
                    </Paper>
                </Grid>

                {/* Card 3: Approved Visits */}
                <Grid item xs={12} md={4}>
                    <Paper
                        elevation={6}
                        sx={{
                            padding: 3,
                            background: "linear-gradient(135deg, #66BB6A 30%, #2E7D32 90%)",
                            color: "white",
                            textAlign: "center",
                            borderRadius: 4,
                        }}
                    >
                        <EventAvailableIcon sx={{ fontSize: 70 }} />
                        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 1 }}>Approved Visits</Typography>
                        <Typography variant="h4" sx={{ fontWeight: "bold" }}>876</Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* Admin Settings */}
            <Box
                sx={{
                    mt: 5,
                    p: 4,
                    background: "#f3f3f3",
                    borderRadius: 4,
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    textAlign: "center",
                }}
            >
                <AdminPanelSettingsIcon sx={{ fontSize: 80, color: "#673AB7", mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
                    Manage System Settings & Logs
                </Typography>
                <Typography variant="body1" sx={{ color: "#555", mt: 1 }}>
                    Monitor visitor check-ins, security logs, and system performance in real-time.
                </Typography>
            </Box>
        </Container>
    );
};

export default AdminDashboard;
