export type ResponseWithPagination<T> = {
  content: T[];
  pagination: {
    pageIndex: number;
    totalPages: number;
    totalRecords: number;
  };
};
