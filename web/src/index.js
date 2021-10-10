import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import MethodProvider from "./contexts/method-context";
import DesignPhaseProvider from "./contexts/designphase-context";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import SourcesProvider from "./contexts/sources-context";

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <React.StrictMode>
            <ChakraProvider>
                <SourcesProvider>
                    <MethodProvider>
                        <DesignPhaseProvider>
                            <App />
                        </DesignPhaseProvider>
                    </MethodProvider>
                </SourcesProvider>
            </ChakraProvider>
        </React.StrictMode>
    </ApolloProvider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
