export type TUser = {
    userId: string;
    name: string;
    email: string;
    role: "student" | "admin" | "tutor";
    iat?: number;
    exp?: number;
  }
  