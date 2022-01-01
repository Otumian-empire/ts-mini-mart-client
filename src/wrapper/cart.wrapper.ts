import CartDefinition from "../definition/cart.definition";
import AxiosBaseRequest from "../utils/AxiosBaseRequest";
import BaseWrapper from "./base.wrapper";

export default class CartWrapper extends BaseWrapper {
  // constructor - sets the path/ base endpoint
  public path: string;
  constructor() {
    super();
    this.path = "/cart";
  }

  // create user
  create = ({ userId, productId, productCount }: CartDefinition) => {
    const req = new AxiosBaseRequest(this.path, "POST", {
      userId,
      productId,
      productCount,
    });

    this.makeRequest(req);
  };

  // list/read all users
  list = () => {
    const req = new AxiosBaseRequest(this.path);
    this.makeRequest(req);
  };

  // read by user id
  read = (id: number) => {
    const req = new AxiosBaseRequest(`${this.path}/${id}`);
    this.makeRequest(req);
  };

  // read one of user id by cart id
  readX = (uId: number, cId: number) => {
    const req = new AxiosBaseRequest(`${this.path}/${uId}/${cId}`);
    this.makeRequest(req);
  };

  // remove/delete user
  remove = (id: number) => {
    const req = new AxiosBaseRequest(this.path, "DELETE", { userId: id });
    this.makeRequest(req);
  };

  // remove/delete user
  removeX = (uId: number, cId: number) => {
    const req = new AxiosBaseRequest(`${this.path}/${cId}`, "DELETE", {
      userId: uId,
    });
    this.makeRequest(req);
  };

  // update user
  update = (cId: number, { userId, productCount }: CartDefinition) => {
    const req = new AxiosBaseRequest(`${this.path}/${cId}`, "PUT", {
      userId,
      productCount,
    });

    this.makeRequest(req);
  };
}
