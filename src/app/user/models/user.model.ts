export interface User {
  id?: string;
  username: string;
  email: string;
  password?: string;
  active?: boolean;
  role?: string;
  createdAt?: number;
  updatedAt?: number;
}
