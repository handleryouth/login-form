import { Layout } from "components";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "@fontsource/poppins";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "/api/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
