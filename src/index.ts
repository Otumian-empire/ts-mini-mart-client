import { Command } from "commander";

import CartDefinition from "./definition/cart.definition";
import CheckoutDefinition from "./definition/checkout.definition";
import ProductDefinition from "./definition/product.definition";
import UserDefinition from "./definition/user.definition";

import CartWrapper from "./wrapper/cart.wrapper";
import CheckoutWrapper from "./wrapper/checkout.wrapper";
import ProductWrapper from "./wrapper/product.wrapper";
import UserWrapper from "./wrapper/user.wrapper";

const userWrapper = new UserWrapper();
const App = new Command();

App.version("1.0.0").description(
  "Client Application Interface for the Mini art API"
);

// create user
App.command("createUser <name> <email> <address>")
  .aliases(["cu", "createU", "addUser", "newUser", "postUser"])
  .description("add user with name, email and address")
  .action((name, email, address) => {
    const user = new UserDefinition(name, email, address);
    userWrapper.create(user);
  });

// list all users
App.command("listUsers")
  .aliases(["lu", "listU", "users"])
  .description("list all users")
  .action(() => userWrapper.list());

// read one user
App.command("readUser <id>")
  .aliases(["ru", "readU", "user"])
  .description("read one user by ID")
  .action((id: number) => userWrapper.read(id));

// delete user
App.command("removeUser <id>")
  .aliases(["rmu", "removeU", "du", "delU", "deleteUser"])
  .description("delete user")
  .action((id: number) => userWrapper.remove(id));

// update user
App.command("updateUser <id> <name> <email> <address>")
  .aliases(["uu", "updateU", "pu", "putUser"])
  .description("update update user")
  .action((id, name, email, address) => {
    const user = new UserDefinition(name, email, address);
    userWrapper.update(id, user);
  });

App.parse(process.argv);
