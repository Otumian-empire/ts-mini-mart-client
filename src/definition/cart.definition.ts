import BaseDefinition from "./base.definition";

export default class Cart extends BaseDefinition {
  userId: number;
  productId: number;
  productCount: number;

  constructor(uId: number, pId: number, pCount: number = 0) {
    super();
    this.userId = Number(uId);
    this.productId = Number(pId);
    this.productCount = Number(pCount);
  }
}
