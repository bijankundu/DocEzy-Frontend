import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";

const App = () => {
  return (
    <ChakraProvider>
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
