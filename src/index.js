import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";
import GlobalStyles from "./styles/GlobalStyles";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </StrictMode>
);
