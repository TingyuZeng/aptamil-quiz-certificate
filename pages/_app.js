import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";
import store from "../store/store";

import "../styles/globals.css";
import "../styles/normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
