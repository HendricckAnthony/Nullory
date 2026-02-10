import { createTheme } from "@mui/material/styles";

export const nulloryThemeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563EB",
      light: "#5B7BED",
      dark: "#1D4ED8",
    },
    secondary: {
      main: "#0284C7",
      light: "#0EA5E9",
      dark: "#0369A1",
    },
    background: {
      default: "#D4DCE6",
      paper: "#E2E8F0",
    },
    text: {
      primary: "#0F172A",
      secondary: "rgba(15, 23, 42, 0.72)",
    },
    divider: "rgba(15, 23, 42, 0.12)",
    action: {
      hover: "rgba(2, 132, 199, 0.06)",
    },
    gradient: {
      brand: "linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #7C3AED 100%)",
      hero: "linear-gradient(180deg, #C8D2DE 0%, #D4DCE6 50%, #DEE4EC 100%)",
    },
  },
  typography: {
    fontFamily: '"DM Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 900 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
  },
  shape: {
    borderRadius: "4px",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
        contained: {
          background: "linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #7C3AED 100%)",
          color: "#FFFFFF",
          "&:hover": {
            background: "linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #7C3AED 100%)",
            boxShadow: "0 10px 35px -5px rgba(124, 58, 237, 0.35)",
          },
        },
        outlined: {
          borderColor: "rgba(2, 132, 199, 0.5)",
          color: "#0284C7",
          "&:hover": {
            borderColor: "rgba(124, 58, 237, 0.6)",
            backgroundColor: "rgba(139, 92, 246, 0.06)",
            color: "#1D4ED8",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
        colorPrimary: {
          background: "linear-gradient(135deg, #2563EB, #7C3AED)",
          border: "none",
          color: "#FFFFFF",
        },
        outlined: {
          borderColor: "rgba(2, 132, 199, 0.5)",
          color: "#0284C7",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          borderColor: "rgba(15, 23, 42, 0.08)",
          borderRadius: "4px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          borderColor: "rgba(15, 23, 42, 0.08)",
          "&:hover": {
            borderColor: "rgba(139, 92, 246, 0.35)",
            boxShadow: "0 8px 30px -8px rgba(124, 58, 237, 0.2)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
        notchedOutline: {
          borderRadius: "4px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(212, 220, 230, 0.92)",
          borderColor: "rgba(15, 23, 42, 0.08)",
          color: "#0F172A",
        },
      },
    },
  },
});
