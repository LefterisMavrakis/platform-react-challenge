// @ts-ignore
import "@fontsource-variable/montserrat";
import { ErrorBoundary } from "react-error-boundary";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import FavouritesContextProvider from "./context/favoritesContext/FavoritesContextProvider";
import AppRoutes from "./routes/AppRoutes";
import "./App.scss";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "'Montserrat Variable', sans-serif",
      h5: {
        fontWeight: 800,
        color: "#07002E",
      },
      h6: {
        color: "#07002E",
      },
      subtitle1: {
        color: "#66637A",
      },
      body1: {
        color: "#07002E",
        fontWeight: 500,
      },
      button: {
        textTransform: "none",
      },
    },
  });

  return (
    <div className="app-wrapper">
      <ErrorBoundary fallback={<p>Oops. something went wrong</p>}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <FavouritesContextProvider>
            <AppRoutes />
          </FavouritesContextProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
