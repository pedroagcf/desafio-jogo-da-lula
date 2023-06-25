import { Global, ThemeProvider } from "@emotion/react";
import { MatchGameProvider } from "context/MatchGameContext";
import { globalStyle } from "styles/global";
import theme from "styles/theme";
import Router from "./routes/AppRouter";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MatchGameProvider>
        <Global styles={globalStyle} />
        <Router />
      </MatchGameProvider>
    </ThemeProvider>
  );
};

export default App;
