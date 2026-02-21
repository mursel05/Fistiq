import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation Register($input: RegisterDto!) {
    register(input: $input) {
      success
      timestamp
    }
  }
`;

export const LOGIN = gql`
  mutation Login($input: LoginDto!) {
    login(input: $input) {
      success
      timestamp
    }
  }
`;

export const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($input: ForgotPasswordDto!) {
    forgotPassword(input: $input) {
      success
      timestamp
    }
  }
`;

export const VERIFY_CODE = gql`
  mutation VerifyCode($input: VerifyCodeDto!) {
    verifyCode(input: $input) {
      success
      timestamp
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation ResetPassword($input: ResetPasswordDto!) {
    resetPassword(input: $input) {
      success
      timestamp
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout {
      success
      timestamp
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation RefreshToken {
    refreshToken {
      success
      timestamp
    }
  } 
`;