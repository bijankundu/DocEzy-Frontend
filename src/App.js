import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "./components/Layout";

const App = () => {
  return (
    <ChakraProvider>
      <Layout>
        <div>Hello</div>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
