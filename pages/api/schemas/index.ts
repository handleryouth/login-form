import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  input Credentials {
    firstname: String!
    lastname: String!
    email: String!
    password: String!
  }

  type Query {
    _dummy: String
  }

  type Mutation {
    createCredentials(input: Credentials!): String
  }
`;
