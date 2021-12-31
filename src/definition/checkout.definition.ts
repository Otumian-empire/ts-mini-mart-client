import { Definition as BaseDefinition } from "./base.definition";

export class Checkout extends BaseDefinition {
  userId: number;
  productIds: number[];
  productCounts: number[];

  constructor(uId: number, pIds: number[] = [], pCounts: number[] = []) {
    super();
    this.userId = uId;
    this.productIds = pIds;
    this.productCounts = pCounts;
  }
}
