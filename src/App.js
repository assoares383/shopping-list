import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";

import Header from "./components/Header";

import Home from "./pages/Home";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e91e63",
    },
    secondary: {
      main: "#00b0ff",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <Home />
    </MuiThemeProvider>
  );
}

export default App;
