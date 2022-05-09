import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";

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

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        {publicRoutes.map(({ Component, Layout, path }, idx) => {
          return (
            <Route
              key={idx}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
              path={path}
            />
          );
        })}
      </Routes>
    </ChakraProvider>
  );
};

const publicRoutes = [
  {
    path: "/",
    Component: Home,
    Layout: Layout,
  },
];

export default App;
