import { gql } from "@apollo/client";

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($input: UpdateAccountDto!) {
    updateProfile(input: $input) {
      success
      timestamp
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation ChangePassword($input: UpdatePasswordDto!) {
    changePassword(input: $input) {
      success
      timestamp
    }
  }
`;