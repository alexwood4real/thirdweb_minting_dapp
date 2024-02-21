import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* AKW: If error persists, figure out why. Can change chain here */}
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
    <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
