import ReactDOM from "react-dom/client";
import TelegramApi from "@shared/api/telegram";

TelegramApi.initWebApp();

import App from "./App";

const targetNode = document.querySelector("#root");

if (targetNode) {
  ReactDOM.createRoot(targetNode).render(<App />);
}
