import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApolloProvider } from "@apollo/client";
import { apolloConfig } from "./configs/apollo.ts";

import "./assets/styles/main.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement,
);

root.render(
  <ApolloProvider client={apolloConfig}>
    <App />
  </ApolloProvider>,
);
