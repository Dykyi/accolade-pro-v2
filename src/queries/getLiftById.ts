import { gql } from "@apollo/client";

export const GET_LIFT_BY_ID = gql`
  query GetLiftById($id: ID!) {
    Lift(id: $id) {
      elevationGain
      id
      name
      status
      trailAccess {
        id
        name
        status
      }
    }
  }
`;
