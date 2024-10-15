import LandingPage from "./pages/LandingPage";
import { Box, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import customThemeFunction from "./assets/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThreeDTest from "./pages/ThreeDTest/ThreeDTest";
import ThreedLastUpdate from "./pages/ThreedLastUpdate";
function App() {
  return (
    <ThemeProvider theme={customThemeFunction}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Box
                sx={{
                  paddingTop: "82px",
                  height: "100%",
                  marginBottom: 0,
                }}
              >
                <LandingPage />
              </Box>
            }
          ></Route>
          <Route path="/threed" element={<ThreedLastUpdate />}></Route>
          <Route
            path={"*"}
            element={
              <Box>
                <Typography>No such path!</Typography>
              </Box>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
