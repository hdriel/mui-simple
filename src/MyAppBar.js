import "./App.css";
import React from "react";
import { Box, Container } from "@mui/material";
import { AppBar } from "./base-components";

function App() {
  return (
    <>
      <AppBar title={"App bar"} elevationScroll />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(40)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </>
  );
}

export default App;
