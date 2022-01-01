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

  // create product
  create = ({ name, price, count }: ProductDefinition) => {
    const req = new AxiosBaseRequest(this.path, "POST", {
      name,
      price,
      count,
    });

    this.makeRequest(req);
  };

  // list/read all products
  list = () => {
    const req = new AxiosBaseRequest(this.path);
    this.makeRequest(req);
  };

  // read one
  read = (id: number) => {
    const req = new AxiosBaseRequest(`${this.path}/${id}`);
    this.makeRequest(req);
  };

  // remove/delete product
  remove = (id: number) => {
    const req = new AxiosBaseRequest(this.path, "DELETE", { productId: id });
    this.makeRequest(req);
  };

  // update product
  update = (id: number, { price, count, description }: ProductDefinition) => {
    const req = new AxiosBaseRequest(this.path, "PUT", {
      productId: id,
      price,
      count,
      description,
    });

    this.makeRequest(req);
  };
}
