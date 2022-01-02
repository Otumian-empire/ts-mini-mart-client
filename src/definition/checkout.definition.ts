import BaseDefinition from "./base.definition";

export default class Checkout extends BaseDefinition {
  userId: number;
  productIds: number[];
  productCounts: number[];

  constructor(uId: number, pIds: number[] = [], pCounts: number[] = []) {
    super();
    this.userId = Number(uId);
    this.productIds = pIds;
    this.productCounts = pCounts;
  }
}
