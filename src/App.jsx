import { useState } from "react";
import { Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";

function App() {
    return (
        <>
			<CssBaseline />
            <Home/>
        </>
    );
}

export default App;
