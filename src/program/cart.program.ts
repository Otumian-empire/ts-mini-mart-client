import { Command } from "commander";
import CartDefinition from "../definition/cart.definition";
import CartWrapper from "../wrapper/cart.wrapper";

const cartWrapper = new CartWrapper();

export default function CartProgram(App: Command): void {
  // Create/Add cart with userId, productId and productCount
  App.command("createCart <userId> <productId> <productCount>")
    .aliases(["cc", "addCart"])
    .description("Add cart with userId, productId and productCount")
    .action((userId: number, productId: number, productCount: number) => {
      const cart = new CartDefinition(
        Number(userId),
        Number(productId),
        Number(productCount)
      );

      cartWrapper.create(cart);
    });

  // List all Carts
  App.command("listCarts")
    .aliases(["lc", "carts"])
    .description("List all Carts")
    .action(() => cartWrapper.list());

  // Read all Cart items By userId
  App.command("readCart <userId>")
    .aliases(["rc", "cart"])
    .description("Read all Cart items By userId")
    .action((userId: number) => cartWrapper.read(Number(userId)));

  // Read one specific Cart item of a User by passing the userId and cartId
  App.command("readCartX <userId> <cartId>")
    .aliases(["rcx", "cartX"])
    .description(
      "Read one specific Cart item of a User by passing the userId and cartId"
    )
    .action((userId: number, cartId: number) => {
      cartWrapper.readX(Number(userId), Number(cartId));
    });

  // Delete Cart by userId
  App.command("removeCart <userId>")
    .aliases(["rmc", "dC"])
    .description("Delete Cart by userId")
    .action((userId: number) => cartWrapper.remove(Number(userId)));

  // Delete a specific Cart item of a User by passing userId and cartId
  App.command("removeCartX <userId> <cartId>")
    .aliases(["rmcx", "dCx"])
    .description(
      "Delete a specific Cart item of a User by passing userId and cartId"
    )
    .action((userId: number, cartId: number) => {
      cartWrapper.removeX(Number(userId), Number(cartId));
    });

  // Update Cart of a User with userId, cartId and  productCount
  App.command("updateCart <userId> <cartId> <productCount>")
    .aliases(["uc", "pC"])
    .description("Update Cart of a User with userId, cartId and  productCount")
    .action((userId: number, cartId: number, productCount: number) => {
      const cart = new CartDefinition(Number(userId), 0, Number(productCount));
      cartWrapper.update(Number(cartId), cart);
    });
}
