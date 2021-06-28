import { ReactNode } from "react";

export type authStorageProps = {
  children: ReactNode;
};

export type createContextProps = {
  user: UserProps | undefined;
  signInWithGoogle: () => Promise<void>;
};

export type UserProps = {
  id: string;
  name: string;
  avatar: string;
};
