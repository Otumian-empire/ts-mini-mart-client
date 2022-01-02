import ProductDefinition from "../definition/product.definition";
import AxiosBaseRequest from "../utils/AxiosBaseRequest";
import BaseWrapper from "./base.wrapper";

export default class ProductWrapper extends BaseWrapper {
  // constructor - sets the path/ base endpoint
  public path: string;
  constructor() {
    super();
    this.path = "/product";
  }

  // Create/Add Product with name, description, price and count
  create = ({ name, description, price, count }: ProductDefinition) => {
    const req = new AxiosBaseRequest(this.path, "POST", {
      name: name || undefined,
      description: description || undefined,
      price: Number(price) || undefined,
      count: Number(count) || undefined,
    });

    this.makeRequest(req);
  };

  // List all Products
  list = () => {
    const req = new AxiosBaseRequest(this.path);
    this.makeRequest(req);
  };

  // Read a Product by productId
  read = (productId: number) => {
    const req = new AxiosBaseRequest(`${this.path}/${Number(productId)}`);
    this.makeRequest(req);
  };

  // Delete a Product by productId
  remove = (productId: number) => {
    const req = new AxiosBaseRequest(this.path, "DELETE", {
      productId: Number(productId),
    });
    this.makeRequest(req);
  };

  // Update a Product by productId passing name, description, price and count
  update = (
    productId: number,
    { price, count, description }: ProductDefinition
  ) => {
    const req = new AxiosBaseRequest(this.path, "PUT", {
      productId: Number(productId),
      description: description || undefined,
      price: Number(price) || undefined,
      count: Number(count) || undefined,
    });

    this.makeRequest(req);
  };
}
