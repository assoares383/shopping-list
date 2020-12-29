import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import CreateList from "./components/CreateList";

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
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/lista" component={CreateList} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
