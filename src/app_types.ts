import { Video } from "./Components/Layout/Types/Video.types";

export interface InitialState {
  data: Video;
}

const GetAllDataAction: string = "Search";

export default InitialState;
export { GetAllDataAction };

export type ApiResponse<DataType> = {
  data: DataType;
};
