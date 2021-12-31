import { Definition as BaseDefinition } from "./base.definition";

export class Product extends BaseDefinition {
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
    this.price = price;
    this.count = count;
  }
}
