export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type ForgotPasswordDto = {
  email: Scalars['String']['input'];
};

export type LoginDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: MutationResponse;
  forgotPassword: MutationResponse;
  login: MutationResponse;
  logout: MutationResponse;
  refreshToken: MutationResponse;
  register: MutationResponse;
  resetPassword: MutationResponse;
  update: User;
  updateProfile: MutationResponse;
  verifyCode: MutationResponse;
};


export type MutationChangePasswordArgs = {
  input: UpdatePasswordDto;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordDto;
};


export type MutationLoginArgs = {
  input: LoginDto;
};


export type MutationRegisterArgs = {
  input: RegisterDto;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordDto;
};


export type MutationUpdateArgs = {
  id: Scalars['Float']['input'];
  input: UpdateUserDto;
};


export type MutationUpdateProfileArgs = {
  input: UpdateAccountDto;
};


export type MutationVerifyCodeArgs = {
  input: VerifyCodeDto;
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  timestamp: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getProfile: User;
  me: User;
  user: User;
  users: Array<User>;
};


export type QueryUserArgs = {
  id: Scalars['Float']['input'];
};

export type RegisterDto = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  surname: Scalars['String']['input'];
};

export type ResetPasswordDto = {
  code: Scalars['Float']['input'];
  newPassword: Scalars['String']['input'];
};

export type UpdateAccountDto = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  surname: Scalars['String']['input'];
};

export type UpdatePasswordDto = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type UpdateUserDto = {
  email: Scalars['String']['input'];
  isBanned: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  surname: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isBanned: Scalars['Boolean']['output'];
  lastLogin: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  sortOrder: Scalars['Int']['output'];
  surname: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type VerifyCodeDto = {
  code: Scalars['Float']['input'];
};

export type RegisterMutationVariables = Exact<{
  input: RegisterDto;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'MutationResponse', success: boolean, timestamp: string } };

export type LoginMutationVariables = Exact<{
  input: LoginDto;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'MutationResponse', success: boolean, timestamp: string } };

export type ForgotPasswordMutationVariables = Exact<{
  input: ForgotPasswordDto;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'MutationResponse', success: boolean, timestamp: string } };

export type VerifyCodeMutationVariables = Exact<{
  input: VerifyCodeDto;
}>;


export type VerifyCodeMutation = { __typename?: 'Mutation', verifyCode: { __typename?: 'MutationResponse', success: boolean, timestamp: string } };

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordDto;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'MutationResponse', success: boolean, timestamp: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'MutationResponse', success: boolean, timestamp: string } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'MutationResponse', success: boolean, timestamp: string } };

export type UpdateProfileMutationVariables = Exact<{
  input: UpdateAccountDto;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'MutationResponse', success: boolean, timestamp: string } };

export type ChangePasswordMutationVariables = Exact<{
  input: UpdatePasswordDto;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'MutationResponse', success: boolean, timestamp: string } };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'User', id: string, email: string, name: string, surname: string, isBanned: boolean } };
