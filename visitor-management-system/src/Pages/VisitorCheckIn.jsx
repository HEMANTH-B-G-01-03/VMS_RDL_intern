import React, { useState } from "react";
import { 
    TextField, Button, Container, Typography, Paper, 
    MenuItem, Select, FormControl, InputLabel, Box, Avatar 
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisitorCheckIn = () => {
    const [visitPurpose, setVisitPurpose] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

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
                    background: "linear-gradient(135deg, #42A5F5 30%, #1565C0 90%)",
                    color: "white",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                    width: "100%",
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <PersonAddIcon sx={{ fontSize: 80, color: "white" }} />
                </Box>

                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                    Visitor Check-In
                </Typography>

                <Box display="flex" gap={2} sx={{ mb: 2 }}>
                    <TextField 
                        label="First Name" 
                        fullWidth 
                        margin="normal" 
                        sx={{
                            background: "white",
                            borderRadius: 2,
                        }}
                    />
                    <TextField 
                        label="Last Name" 
                        fullWidth 
                        margin="normal" 
                        sx={{
                            background: "white",
                            borderRadius: 2,
                        }}
                    />
                </Box>

                <TextField 
                    label="Phone Number" 
                    fullWidth 
                    margin="normal" 
                    sx={{
                        background: "white",
                        borderRadius: 2,
                    }}
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel sx={{ color: "white" }}>Purpose of Visit</InputLabel>
                    <Select
                        value={visitPurpose}
                        onChange={(e) => setVisitPurpose(e.target.value)}
                        sx={{
                            background: "white",
                            borderRadius: 2,
                        }}
                    >
                        <MenuItem value="Meeting">Official</MenuItem>
                        <MenuItem value="Delivery">Personal</MenuItem>
                        <MenuItem value="Maintenance">Interview</MenuItem>
                        <MenuItem value="Maintenance">Delivery</MenuItem>
                        <MenuItem value="Maintenance">Maintenance</MenuItem>
                        
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                </FormControl>

                <Box 
                    sx={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        alignItems: "center", 
                        mt: 2, 
                        mb: 2 
                    }}
                >
                    <Button
                        variant="contained"
                        component="label"
                        startIcon={<CloudUploadIcon />}
                        sx={{
                            background: "#FFA726",
                            color: "white",
                            fontWeight: "bold",
                            mb: 2
                        }}
                    >
                        Upload Image
                        <input type="file" hidden onChange={handleImageUpload} />
                    </Button>

                    {selectedImage && (
                        <Avatar 
                            src={selectedImage} 
                            sx={{ width: 80, height: 80, border: "2px solid white" }} 
                        />
                    )}
                </Box>

                <Button 
                    variant="contained" 
                    color="secondary" 
                    fullWidth 
                    sx={{ mt: 2, py: 1.5, fontWeight: "bold", background: "#E64A19" }}
                >
                    Submit
                </Button>
            </Paper>
        </Container>
    );
};

export default VisitorCheckIn;
