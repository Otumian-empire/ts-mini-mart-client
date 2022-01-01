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

  // Create/Add cart with userId, productId and productCount
  create = ({ userId, productId, productCount }: CartDefinition) => {
    const req = new AxiosBaseRequest(this.path, "POST", {
      userId,
      productId,
      productCount,
    });

    this.makeRequest(req);
  };

  // List all Carts
  list = () => {
    const req = new AxiosBaseRequest(this.path);
    this.makeRequest(req);
  };

  // Read all Cart items By userId
  read = (userId: number) => {
    const req = new AxiosBaseRequest(`${this.path}/${userId}`);
    this.makeRequest(req);
  };

  // Read one specific Cart item of a User by passing the userId and cartId
  readX = (userId: number, cartId: number) => {
    const req = new AxiosBaseRequest(`${this.path}/${userId}/${cartId}`);
    this.makeRequest(req);
  };

  // Delete Cart by userId
  remove = (userId: number) => {
    const req = new AxiosBaseRequest(this.path, "DELETE", { userId });
    this.makeRequest(req);
  };

  // Delete a specific Cart item of a User by passing userId and cartId
  removeX = (userId: number, cartId: number) => {
    const req = new AxiosBaseRequest(`${this.path}/${cartId}`, "DELETE", {
      userId,
    });

    this.makeRequest(req);
  };

  // Update Cart of a User with userId, cartId and  productCount
  update = (cartId: number, { userId, productCount }: CartDefinition) => {
    const req = new AxiosBaseRequest(`${this.path}/${cartId}`, "PUT", {
      userId,
      productCount,
    });

    this.makeRequest(req);
  };
}
