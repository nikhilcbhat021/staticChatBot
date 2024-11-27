import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";
import "./index.css";
import App from "./App.jsx";
import theme from './components/themes';

createRoot(document.getElementById("root")).render(
    // <StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    // {/* </StrictMode> */}
);
