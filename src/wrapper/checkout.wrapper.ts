import CheckoutDefinition from "../definition/checkout.definition";
import AxiosBaseRequest from "../utils/AxiosBaseRequest";
import BaseWrapper from "./base.wrapper";

export default class CheckoutWrapper extends BaseWrapper {
  // constructor - sets the path/ base endpoint
  public path: string;
  constructor() {
    super();
    this.path = "/checkout";
  }

  // create checkout
  create = ({ userId }: CheckoutDefinition) => {
    const req = new AxiosBaseRequest(this.path, "POST", { userId });

    this.makeRequest(req);
  };

  // list/read all checkouts
  list = () => {
    const req = new AxiosBaseRequest(this.path);
    this.makeRequest(req);
  };

  // read checkout by user id
  read = (uId: number) => {
    const req = new AxiosBaseRequest(`${this.path}/${uId}`);
    this.makeRequest(req);
  };

  // remove/delete checkout by user id
  remove = (id: number) => {
    const req = new AxiosBaseRequest(this.path, "DELETE", { userId: id });
    this.makeRequest(req);
  };

  // remove/delete checkout
  removeX = (uId: number, cId: number) => {
    const req = new AxiosBaseRequest(`${this.path}/${cId}`, "DELETE", {
      userId: uId,
    });
    this.makeRequest(req);
  };
}
