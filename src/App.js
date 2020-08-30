import React from "react";
import { StylesProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import GlobalStyle from "./common/styles/global-style";

import Main from "./containers/Main";

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  );
}

export default App;
