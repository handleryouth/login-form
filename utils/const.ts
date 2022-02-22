import { gql } from "@apollo/client";

export const CREATE_CREDENTIALS = gql`
  mutation createInvoice($input: Credentials!) {
    createCredentials(input: $input)
  }
`;
