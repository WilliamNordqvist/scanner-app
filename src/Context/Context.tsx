import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { TStoreObj, useHook } from "../hooks/useHook";

export const Context = createContext<{
  createNewProject:(title:string) => void,
  deleteProject: () => void;
  saveProject: () => void;
  barCode: {
    add:(barcode:string) => void,
    delete:(barcode:string) => void,
  },
  store?:{
    name:string,
    barcodes:string[],
    id:string,
  } 
}>({
  createNewProject: (title:string) => {},
  deleteProject: () => {},
  saveProject: () => {},
  barCode: {
    add: (barcode:string) => {},
    delete: (barcode:string) => {},
  },
  store: undefined
});

type Props = {
  children?: React.ReactNode;
};
//https://coolors.co/palette/e63946-f1faee-a8dadc-457b9d-1d3557
const theme = {
  colors: {
    warning: "#e63946",
    white: "#f1faee",
    background: "#a8dadc",
    secondary: "#457b9d",
    primary: "#1d3557",
  },
  sizes: {
    xsmall: ".5rem",
    small: "1rem",
    medium: "2rem",
    normal: "2.5rem",
    large: "4rem",
    xlarge: "8rem",
    xxlarge: "10rem",
  },
};

const MuiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary,
    },
    secondary:{
      main:theme.colors.secondary,
    },
    warning:{
      main:theme.colors.warning,
    },
    background:{
      paper: theme.colors.secondary,
    },
  },
});

export const StoreProvider: React.FC<Props> = ({ children }) => {
  const store = useHook()

  return (
    <Context.Provider value={store}>
      <MuiThemeProvider theme={MuiTheme}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MuiThemeProvider>
    </Context.Provider>
  );
};
