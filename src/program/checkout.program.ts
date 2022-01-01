import { Command } from "commander";
import CheckoutDefinition from "../definition/checkout.definition";
import CheckoutWrapper from "../wrapper/checkout.wrapper";

const checkoutWrapper = new CheckoutWrapper();

export default function checkoutProgram(App: Command): void {
  // Create/Add Checkout with userId
  App.command("createCheckout <userId>")
    .aliases(["ck", "addCheckout"])
    .description("Add Checkout with userId")
    .action((userId) => {
      const checkout = new CheckoutDefinition(userId);
      checkoutWrapper.create(checkout);
    });

  // List all Checkouts
  App.command("listCheckouts")
    .aliases(["lk", "checkouts"])
    .description("List all Checkouts")
    .action(() => checkoutWrapper.list());

  // Read all Checkout items by User with userId
  App.command("readCheckout <userId>")
    .aliases(["rk", "checkout"])
    .description("Read all Checkout items by User with userId")
    .action((userId: number) => checkoutWrapper.read(userId));

  // Delete Checkout by of a User by userId
  App.command("removeCheckout <userId>")
    .aliases(["rmk", "dK"])
    .description("Delete Checkout by of a User by userId")
    .action((userId: number) => checkoutWrapper.remove(userId));

  // Delete a specific Checkout item of User with userId and checkoutId
  App.command("removeCheckoutX <userId> <checkoutId>")
    .aliases(["rmkx", "dKx"])
    .description(
      "Delete a specific Checkout item of User with userId and checkoutId"
    )
    .action((userId: number, checkoutId: number) => {
      checkoutWrapper.removeX(userId, checkoutId);
    });
}
