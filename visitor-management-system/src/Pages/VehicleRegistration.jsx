import React, { useState } from "react";
import { 
    TextField, Button, Container, Typography, Paper, 
    MenuItem, Select, FormControl, InputLabel, Box 
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const VehicleRegistration = () => {
    const [vehicleType, setVehicleType] = useState("");

    return (
        <Container
            maxWidth="sm"
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
                    background: "linear-gradient(135deg, #FF8A65 30%, #D84315 90%)",
                    color: "white",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                    width: "100%",
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <DirectionsCarIcon sx={{ fontSize: 80, color: "white" }} />
                </Box>

                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                    Vehicle Registration
                </Typography>

                <FormControl fullWidth margin="normal">
                    <InputLabel sx={{ color: "white" }}>Vehicle Type</InputLabel>
                    <Select
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        sx={{
                            background: "white",
                            borderRadius: 2,
                        }}
                    >
                        <MenuItem value="Two-Wheeler">Two-Wheeler</MenuItem>
                        <MenuItem value="Four-Wheeler">Four-Wheeler</MenuItem>
                    </Select>
                </FormControl>

                <TextField 
                    label="Vehicle Number" 
                    fullWidth 
                    margin="normal" 
                    sx={{
                        background: "white",
                        borderRadius: 2,
                    }}
                />

                <Button 
                    variant="contained" 
                    color="secondary" 
                    fullWidth 
                    sx={{ mt: 2, py: 1.5, fontWeight: "bold", background: "#E64A19" }}
                >
                    Register Vehicle
                </Button>
            </Paper>
        </Container>
    );
};

export default VehicleRegistration;
