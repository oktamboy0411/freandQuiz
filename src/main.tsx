import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import { store } from "./redux/store/store.ts";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
