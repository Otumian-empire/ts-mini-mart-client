import axios from "axios";
import AxiosBaseRequest from "../utils/AxiosBaseRequest";

export default abstract class BaseWrapper {
  public path: string;

  makeRequest = ({ url, method, data }: AxiosBaseRequest): void => {
    axios({ url, method, data })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  create: (obj: any) => void;
  list: () => void;
  read: (id: number) => void;
  remove: (id: number) => void;
  update: (id: number, obj: any) => void;
}
