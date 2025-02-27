import React, { useState } from "react";
import { 
    TextField, Button, Container, Typography, Paper, 
    MenuItem, Select, FormControl, InputLabel, Box, Snackbar, Alert
} from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const IdentityVerification = () => {
    const [verificationType, setVerificationType] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [filePreview, setFilePreview] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setFilePreview(URL.createObjectURL(file)); // Generates a preview URL
        }
    };

    const handleVerify = () => {
        setOpenSnackbar(true);
    };

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh", // Full height for perfect centering
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 4,
                    background: "linear-gradient(135deg, #66BB6A 30%, #2E7D32 90%)",
                    color: "white",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                    width: "100%",
                    maxWidth: "450px", // Restrict width for perfect alignment
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <VerifiedUserIcon sx={{ fontSize: 80, color: "white" }} />
                </Box>

                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                    Identity Verification
                </Typography>

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
                    <InputLabel sx={{ color: "white" }}>Verification Type</InputLabel>
                    <Select
                        value={verificationType}
                        onChange={(e) => setVerificationType(e.target.value)}
                        sx={{
                            background: "white",
                            borderRadius: 2,
                        }}
                    >
                        <MenuItem value="OTP">Verify via OTP</MenuItem>
                        <MenuItem value="Document">Upload Document</MenuItem>
                    </Select>
                </FormControl>

                {verificationType === "OTP" && (
                    <TextField 
                        label="Enter OTP" 
                        fullWidth 
                        margin="normal" 
                        sx={{
                            background: "white",
                            borderRadius: 2,
                        }}
                    />
                )}

                {verificationType === "Document" && (
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
                            Upload File
                            <input 
                                type="file" 
                                hidden 
                                accept="image/*,application/pdf" 
                                onChange={handleFileUpload} 
                            />
                        </Button>

                        {selectedFile && (
                            <Typography sx={{ fontSize: 14, color: "white", mt: 1 }}>
                                {selectedFile.name}
                            </Typography>
                        )}

                        {filePreview && (
                            <Box sx={{ mt: 2, width: "100%", display: "flex", justifyContent: "center" }}>
                                <img 
                                    src={filePreview} 
                                    alt="Uploaded File" 
                                    style={{ width: "150px", height: "150px", borderRadius: "8px" }} 
                                />
                            </Box>
                        )}
                    </Box>
                )}

                <Button 
                    variant="contained" 
                    color="secondary" 
                    fullWidth 
                    sx={{ mt: 2, py: 1.5, fontWeight: "bold", background: "#E64A19" }}
                    onClick={handleVerify}
                >
                    Verify
                </Button>

                {/* Snackbar Notification */}
                <Snackbar 
                    open={openSnackbar} 
                    autoHideDuration={3000} 
                    onClose={() => setOpenSnackbar(false)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <Alert 
                        onClose={() => setOpenSnackbar(false)} 
                        severity="success" 
                        sx={{ width: '100%' }}
                    >
                        Sent for Verification!
                    </Alert>
                </Snackbar>

            </Paper>
        </Container>
    );
};

export default IdentityVerification;
 