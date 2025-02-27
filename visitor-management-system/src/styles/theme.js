import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#007AFF",
        },
        secondary: {
            main: "#FF3B30",
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
    },
});

export default theme;
