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

export type GDPResponseT = {
  data: {
    year_1: number;
    month_3: number;
    year_5: number;
    average_percent: string;
    current: string;
    observations: {
      date: string;
      realtime_end: string;
      realtime_start: string;
      value: string;
    }[];
  };
};
