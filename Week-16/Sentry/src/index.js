import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as Sentry from "@sentry/react";
import reportWebVitals from "./reportWebVitals";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://d752de34d26240a1bdfb522b79f367f9@o4504149477687296.ingest.sentry.io/4504149479063552",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 0.2,
  // Set  to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
