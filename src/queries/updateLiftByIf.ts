import { gql } from "@apollo/client";

export const UPDATE_LIFT_BY_ID = gql`
  mutation UpdateLift($id: ID!, $status: LiftStatus!) {
    setLiftStatus(id: $id, status: $status) {
      elevationGain
      name
      id
      status
      trailAccess {
        id
        name
        status
      }
    }
  }
`;
