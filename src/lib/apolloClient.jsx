import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;
const isLocal = API_URL === "http://localhost:1337";

if (!API_URL) {
    throw new Error("VITE_API_URL is not defined");
}

if (!API_TOKEN) {
    throw new Error("VITE_API_TOKEN is not defined");
}

const httpLink = new HttpLink({
    uri: isLocal ? "/graphql" : `${API_URL}/graphql`,
    headers: {
        Authorization: `Bearer ${API_TOKEN}`,
    },
});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});
