import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import { Menu, Home, Person, VerifiedUser, DirectionsCar, QrCode, Notifications, TrackChanges, AdminPanelSettings } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <>
            <IconButton onClick={() => setOpen(true)}>
                <Menu />
            </IconButton>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <List>
                    {[
                        { text: "Dashboard", icon: <Home />, path: "/" },
                        { text: "Check-In", icon: <Person />, path: "/check-in" },
                        { text: "Identity Verification", icon: <VerifiedUser />, path: "/verify" },
                        { text: "Vehicle Registration", icon: <DirectionsCar />, path: "/vehicle" },
                        { text: "Pass Generation", icon: <QrCode />, path: "/pass" },
                        { text: "Host Notification", icon: <Notifications />, path: "/host" },
                        { text: "Visitor Tracking", icon: <TrackChanges />, path: "/tracking" },
                        { text: "Admin Panel", icon: <AdminPanelSettings />, path: "/admin" },
                    ].map(({ text, icon, path }) => (
                        <ListItem button key={text} component={Link} to={path}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
