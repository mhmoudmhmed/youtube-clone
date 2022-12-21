import { Video } from "./Components/Types/Video.types";

export interface InitialState {
  data: Video;
}

const GetAllDataAction: string = "Search";

export default InitialState;
export { GetAllDataAction };

export type ApiResponse<DataType> = {
  data: DataType;
};
