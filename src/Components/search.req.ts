import api from "src/api";

export interface getAllCategoriesResponse {
  // meta: {
  //   current_page: number;
  //   first_page: number;
  //   first_page_url: string;
  //   last_page: number;
  //   last_page_url: string;
  //   next_page_url: string;
  //   per_page: number;
  //   previous_page_url: string;
  //   total: number;
  //   from?: Date;
  //   to?: Date;
  // };
  data: [];
  // filters: [];
  // message: string;
}

export const GetAllCategories = async () => {
  return await api.get<getAllCategoriesResponse>("/search");
};
