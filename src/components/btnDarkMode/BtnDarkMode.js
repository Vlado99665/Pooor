import React, { useState } from "react";

import { Grid, Typography, Switch, FormControlLabel } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const SFDUJ = () => {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  const greenTheme = createMuiTheme({
    palette: {
      primary: green,
      secondary: green,
    },
  });
};
return (
  <ThemeProvider theme={darkMode ? darkTheme : greenTheme}>
    <Switch chacked={darkMode} onChange={() => setDarkMode(!darkMode)}></Switch>
  </ThemeProvider>
);

export default BtnDarkMode;
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
