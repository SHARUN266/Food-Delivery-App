import Layout from "../components/Layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store.js";
import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
