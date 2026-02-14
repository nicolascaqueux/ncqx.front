import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import App from "./containers/App";
import { client } from "./lib/apolloClient";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </StrictMode>,
);
