export type DBResponse<T> = {
  message: string;
  data: T;
  status: number;
};
