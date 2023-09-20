import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#c4fcff",
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

const App = () => {
  const [light, setLight] = React.useState(true);
  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Button onClick={() => setLight((prev) => !prev)}>Change Theme</Button>
    </ThemeProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
/*import React, { useState } from "react";

import { Grid, Typography, Switch, FormControlLabel } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const SFDUJ = () => {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  
};
return (
  <ThemeProvider theme={darkMode ? darkTheme : greenTheme}>
    <Switch chacked={darkMode} onChange={() => setDarkMode(!darkMode)}></Switch>
  </ThemeProvider>
);

export default SFDUJ;
/*import React, { useState } from "react";

import { Box, Typography, Switch, FormControlLabel } from "@mui/material";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const [color, setColor] = useState();
  const handleSwitch = (event) => {
    setChecked(event.target.checked);
  };

  const getColor = () => {
    if (checked) {
      setColor("#ff0000");
    } else {
      setColor("#ffffff");
    }
    return color;
  };
  return (
    <Box m={3} bgcolor={getColor}>
      <Typography variant="h4" align="center">
        MUISWE
      </Typography>
      <FormControlLabel
        label="Change to Red Background Color"
        control={<Switch checked={checked} onChange={handleSwitch} />}
      />
    </Box>
  );
};

export default MuiSwitch;*/
