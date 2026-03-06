import {
  FORGOT_PASSWORD,
  LOGIN,
  LOGOUT,
  REGISTER,
  RESET_PASSWORD,
  VERIFY_CODE,
} from "@/graphql/auth/mutations";
import {
  ForgotPasswordMutation,
  LoginMutation,
  LogoutMutation,
  RefreshTokenMutation,
  RegisterMutation,
  ResetPasswordMutation,
  VerifyCodeMutation,
} from "@/graphql/type";
import { GET_PROFILE } from "@/graphql/user/queries";
import { client } from "@/utils/apollo";
import { useMutation } from "@apollo/client/react";

export function useRegister() {
  const [register, { loading, error }] = useMutation<RegisterMutation>(
    REGISTER,
    {
      onCompleted() {
        client.refetchQueries({
          include: [GET_PROFILE],
        });
      },
    },
  );
  return { register, loading, error };
}

export function useLogin() {
  const [login, { loading, error }] = useMutation<LoginMutation>(LOGIN, {
    onCompleted() {
      client.refetchQueries({
        include: [GET_PROFILE],
      });
    },
  });
  return { login, loading, error };
}

export function useForgotPassword() {
  const [forgotPassword, { loading, error }] =
    useMutation<ForgotPasswordMutation>(FORGOT_PASSWORD);
  return { forgotPassword, loading, error };
}

export function useVerifyCode() {
  const [verifyCode, { loading, error }] =
    useMutation<VerifyCodeMutation>(VERIFY_CODE);
  return { verifyCode, loading, error };
}

export function useResetPassword() {
  const [resetPassword, { loading, error }] =
    useMutation<ResetPasswordMutation>(RESET_PASSWORD);
  return { resetPassword, loading, error };
}

export function useLogout() {
  const [logout, { loading, error }] = useMutation<LogoutMutation>(LOGOUT);
  return { logout, loading, error };
}
