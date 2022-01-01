import BaseDefinition from "./base.definition";

export default class UserDefinition extends BaseDefinition {
  name: string;
  email: string;
  address: string;

  constructor(name: string, email: string, address: string) {
    super();
    this.name = name;
    this.email = email;
    this.address = address;
  }
}
