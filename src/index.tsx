import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { formTheme } from "./settings/chakra/form-theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const QUERY_CLIENT = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={QUERY_CLIENT}>
      <ChakraProvider theme={formTheme}>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
