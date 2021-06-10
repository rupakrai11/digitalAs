import "./App.css";
import Home from "./pages/home";
import { ThemeProvider } from "@material-ui/core";
import theme from "./utils/theme";
import Router from "./component/common/router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
