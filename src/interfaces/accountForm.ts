export interface ILoginForm {
  email: string;
  password?: string;
}

export interface ISignupForm {
  email: string;
  password?: string;
  verifyPassword?: string;
  username: string;
  isFemale: boolean;
}

export interface ILoggedInForm {
  email: string;
  nickname: string;
}
