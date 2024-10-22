import { Auth } from "@rola/services/schemas";
import { UseFormReturn } from "react-hook-form";

export type LoginType = "google" | "register" | "email" | "verification";

export type LoginValues = Auth & {
  code: string;
};

type HandleSignInType = {
  handleSignInTypeChange: (_type: LoginType) => void;
};

export type GoogleSignInProps = HandleSignInType & {
  handleGoogleSignIn: () => void;
};

export type EmailAuthProps = HandleSignInType & {
  form: UseFormReturn<LoginValues, any, undefined>;
  isLoading: boolean;
  handleEmailAuth: (_values: LoginValues) => void;
  handleVerification: (_values: LoginValues) => void;
};
