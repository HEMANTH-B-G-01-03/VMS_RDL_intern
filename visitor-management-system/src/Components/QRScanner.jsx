import React, { useState } from "react";
import { Container, Typography, Paper } from "@mui/material";
import QrScanner from "react-qr-scanner";

const QRScanner = ({ onScanSuccess }) => {
    const [scanResult, setScanResult] = useState("");

    const handleScan = (data) => {
        if (data) {
            setScanResult(data);
            if (onScanSuccess) {
                onScanSuccess(data); // Pass scanned data to parent
            }
        }
    };

    const handleError = (err) => {
        console.error("QR Scan Error:", err);
    };

    return (
        <Container>
            <Paper elevation={3} sx={{ padding: 3, marginTop: 4, textAlign: "center" }}>
                <Typography variant="h4" gutterBottom>QR Scanner</Typography>
                <QrReader
                    delay={300}
                    style={{ width: "100%" }}
                    onError={handleError}
                    onScan={handleScan}
                />
                {scanResult && (
                    <Typography variant="body1" sx={{ marginTop: 2 }}>
                        Scanned Result: {scanResult}
                    </Typography>
                )}
            </Paper>
        </Container>
    );
};

export default QRScanner;
