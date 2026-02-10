import { createTheme } from "@mui/material/styles";

export const nulloryTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2563EB",
      light: "#5B7BED",
      dark: "#1D4ED8",
    },
    secondary: {
      main: "#00B3FF",
      light: "#8B5CF6",
      dark: "#60A5FA",
    },
    background: {
      default: "#05070D",
      paper: "#111827",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
    divider: "rgba(255, 255, 255, 0.08)",
    action: {
      hover: "rgba(0, 179, 255, 0.06)",
    },
    gradient: {
      brand: "linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #7C3AED 100%)",
      hero: "linear-gradient(180deg, rgba(17, 24, 39, 0.8) 0%, rgba(5, 7, 13, 1) 100%)",
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
          "&:hover": {
            background: "linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #7C3AED 100%)",
            boxShadow: "0 10px 35px -5px rgba(124, 58, 237, 0.35)",
          },
        },
        outlined: {
          borderColor: "rgba(0, 179, 255, 0.4)",
          color: "#00B3FF",
          "&:hover": {
            borderColor: "rgba(139, 92, 246, 0.6)",
            backgroundColor: "rgba(139, 92, 246, 0.06)",
            color: "#FFFFFF",
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
          borderColor: "rgba(0, 179, 255, 0.5)",
          color: "#00B3FF",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          borderColor: "rgba(255, 255, 255, 0.06)",
          borderRadius: "4px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          borderColor: "rgba(255, 255, 255, 0.06)",
          "&:hover": {
            borderColor: "rgba(139, 92, 246, 0.3)",
            boxShadow: "0 8px 30px -8px rgba(124, 58, 237, 0.25)",
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
          backgroundColor: "rgba(5, 7, 13, 0.85)",
          borderColor: "rgba(0, 179, 255, 0.1)",
        },
      },
    },
  },
});
