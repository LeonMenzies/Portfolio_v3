export interface ApiResponse<T> {
  success: boolean;
  errorMessage: string;
  data?: T;
}

export type LoginRequestT = {
  email: string;
  password: string;
};

export type LoginResponseT = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
};

export type SignUpRequestT = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type ApplicationsResponseT = {
  id: number;
  companyName: string;
  jobTitle: string;
  status: string;
  email: string;
};
