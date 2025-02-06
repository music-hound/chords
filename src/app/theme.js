import { createTheme } from "@mui/material/styles";

const getDesignTokens = (isLight) => ({
  typography: {
    fontFamily: 'Helvetica Black',
  },
  palette: {
    mode:( isLight ? 'light' : 'dark' ),
    isLight,
    ...(isLight ? 
      {
      // Светлая тема
      primary: {
        main: "#ffaa26",
      },
      background: {
        default: "#f4f6f8",
        // paper: "#f5f5f5",
      },
      text: {
        primary: "#ffaa26",
        secondary: "#575b8c",
        pastel: '#555',
      },
    } : {
      // Темная тема
      primary: {
        main: "#ffaa26",
      },
      background: {
        default: "#181818",
        // paper: "#181818",
      },
      text: {
        primary: "#ffaa26",
        secondary: "#fff",
        pastel: '#777',
      },
    }
  ),
  },
});

const createAppTheme = (isLight) => {
  return createTheme(getDesignTokens(isLight))
}

export default createAppTheme;
