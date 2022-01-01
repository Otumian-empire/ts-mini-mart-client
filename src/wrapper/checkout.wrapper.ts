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

  // Create/Add Checkout with userId
  create = ({ userId }: CheckoutDefinition) => {
    const req = new AxiosBaseRequest(this.path, "POST", { userId });

    this.makeRequest(req);
  };

  // List all Checkouts
  list = () => {
    const req = new AxiosBaseRequest(this.path);
    this.makeRequest(req);
  };

  // Read all Checkout items by User with userId
  read = (userId: number) => {
    const req = new AxiosBaseRequest(`${this.path}/${userId}`);
    this.makeRequest(req);
  };

  // Delete Checkout by of a User by userId
  remove = (userId: number) => {
    const req = new AxiosBaseRequest(this.path, "DELETE", { userId });
    this.makeRequest(req);
  };

  // Delete a specific Checkout item of User with userId and checkoutId
  removeX = (userId: number, checkoutId: number) => {
    const req = new AxiosBaseRequest(`${this.path}/${checkoutId}`, "DELETE", {
      userId,
    });
    this.makeRequest(req);
  };
}
