import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { lightTheme } from "./styles/theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <h1>React Panda 🐼 </h1>
      </ThemeProvider>
    </Router>
  );
}

export default App;
