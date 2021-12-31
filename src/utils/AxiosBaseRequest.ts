import { Method as IAxiosMethod } from "axios";
import { BASE_URL } from "../config/config";

export class AxiosBaseRequest {
  public url: string = BASE_URL;
  public method: IAxiosMethod = "GET";
  public data: any = {};

  constructor(path: string, method: IAxiosMethod = "GET", data: any = {}) {
    this.url = this.url + path;
    this.method = method;
    this.data = data;
  }
}
