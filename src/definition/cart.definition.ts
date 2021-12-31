import { Definition as BaseDefinition } from "./base.definition";

export class Cart extends BaseDefinition {
  userId: number;
  productId: number;
  productCount: number;

  constructor(uId: number, pId: number, pCount: number = 0) {
    super();
    this.userId = uId;
    this.productId = pId;
    this.productCount = pCount;
  }
}
