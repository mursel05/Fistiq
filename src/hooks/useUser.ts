import { GET_PROFILE } from "@/graphql/user/queries";
import {
  ChangePasswordMutation,
  GetProfileQuery,
  UpdateProfileMutation,
} from "@/graphql/type";
import { useQuery } from "@apollo/client/react";
import { useMutation } from "@apollo/client/react";
import { CHANGE_PASSWORD, UPDATE_PROFILE } from "@/graphql/user/mutations";

export function useProfile() {
  const { loading, error, data } = useQuery<GetProfileQuery>(GET_PROFILE);
  return { loading, error, profile: data?.getProfile ?? null };
}

export function useUpdateProfile() {
  const [updateProfile, { loading, error }] =
    useMutation<UpdateProfileMutation>(UPDATE_PROFILE);
  return { updateProfile, loading, error };
}

export function useChangePassword() {
  const [changePassword, { loading, error }] =
    useMutation<ChangePasswordMutation>(CHANGE_PASSWORD);
  return { changePassword, loading, error };
}
