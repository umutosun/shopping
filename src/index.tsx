import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store";
import { NotificationContainer } from "react-notifications";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
    <NotificationContainer position="top-right" classname="notification" />{" "}
    {/* Bildirim Konteyneri */}
  </Provider>
);
