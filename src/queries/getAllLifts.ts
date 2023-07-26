import { gql } from "@apollo/client";

export const GET_ALL_LIFTS = gql`
  query getAllLifts {
    allLifts {
      name
      elevationGain
      status
      id
    }
  }
`;
