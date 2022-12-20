export type ResponseMeta = {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string;
  previous_page_url: string;
  test_overall_score?: number;
  current_course?: number;
};

export type ApiResponse<DataType> = {
  data: DataType;
  meta: ResponseMeta | null;
  message: string;
  filters: any;
};
