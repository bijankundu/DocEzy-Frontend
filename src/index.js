import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import store from "./store";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: 1,
    },
  },
});

const theme = extendTheme({
  colors: {
    brand: {
      100: "#eeeefb",
      200: "#ebeafa",
      300: "#c2c1f1",
      400: "#9997e8",
      500: "#706dde",
      600: "#4744d5",
      700: "#332fd0",
      800: "#2e2abb",
      900: "#2926a6",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </Router>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
