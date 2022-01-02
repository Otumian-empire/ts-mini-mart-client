import BaseDefinition from "./base.definition";

export default class Product extends BaseDefinition {
  name: string;
  description: string;
  price: number;
  count: number;

  constructor(
    name: string,
    desc: string,
    price: number = 0,
    count: number = 0
  ) {
    super();
    this.name = name;
    this.description = desc;
    this.price = Number(price);
    this.count = Number(count);
  }
}
