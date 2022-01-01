import { Method as AxiosMethodType } from "axios";
import { BASE_URL } from "../config/config";

export default class AxiosBaseRequest {
  public url: string;
  public method: AxiosMethodType;
  public data: any = {};

  constructor(
    path: string = "",
    method: AxiosMethodType = "GET",
    data: any = {}
  ) {
    this.url = BASE_URL + path;
    this.method = method;
    this.data = data;
  }
}
