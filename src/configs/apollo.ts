import { ApolloClient, InMemoryCache } from "@apollo/client";

export const API_URL = "https://snowtooth.moonhighway.com/";

export const apolloConfig = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});
