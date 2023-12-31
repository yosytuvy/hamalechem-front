import { ApolloClient, InMemoryCache, createHttpLink, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from "@apollo/client/utilities";

const BASE_URI = "localhost:4000/graphql";

const httpLink = createHttpLink({
  uri: `http://${BASE_URI}`,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: `ws://${BASE_URI}`,
    connectionParams: {
      Authorization: localStorage.getItem("HAMALECHEM_TOKEN") || "",
    },
  })
);

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("HAMALECHEM_TOKEN");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `${token}` : "",
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition";
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
