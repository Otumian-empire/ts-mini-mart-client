import { Command } from "commander";
import UserDefinition from "../definition/user.definition";
import UserWrapper from "../wrapper/user.wrapper";

const userWrapper = new UserWrapper();

export default function UserProgram(App: Command): void {
  // Create/Add User with name, email and address
  App.command("createUser <name> <email> <address>")
    .aliases(["cu", "addUser"])
    .description("Add user with name, email and address")
    .action((name, email, address) => {
      const user = new UserDefinition(name, email, address);
      userWrapper.create(user);
    });

  // List all Users
  App.command("listUsers")
    .aliases(["lu", "users"])
    .description("List all Users")
    .action(() => userWrapper.list());

  // Read a User by userId
  App.command("readUser <userId>")
    .aliases(["ru", "user"])
    .description("Read a User by userId")
    .action((userId: number) => userWrapper.read(userId));

  // Delete User by userId
  App.command("removeUser <userId>")
    .aliases(["rmu", "dU"])
    .description("Delete User by userId")
    .action((userId: number) => userWrapper.remove(userId));

  // Update User by userId passing the name, email and address
  App.command("updateUser <userId> <name> <email> <address>")
    .aliases(["uu", "pU"])
    .description("Update User by userId passing the name, email and address")
    .action((userId, name, email, address) => {
      const user = new UserDefinition(name, email, address);
      userWrapper.update(userId, user);
    });
}
