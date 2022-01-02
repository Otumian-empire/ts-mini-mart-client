import { Command } from "commander";
import productDefinition from "../definition/product.definition";
import ProductWrapper from "../wrapper/product.wrapper";

const productWrapper = new ProductWrapper();

export default function ProductProgram(App: Command): void {
  // Create/Add Product with name, description, price and count
  App.command("createProduct <name> <description> <price> <count>")
    .aliases(["cp", "addProduct"])
    .description("Add Product with name, description, price and count")
    .action(
      (name: string, description: string, price: number, count: number) => {
        const product = new productDefinition(
          name,
          description,
          Number(price),
          Number(count)
        );

        productWrapper.create(product);
      }
    );

  // List all Products
  App.command("listProducts")
    .aliases(["lp", "products"])
    .description("List all Products")
    .action(() => productWrapper.list());

  // Read a Product by productId
  App.command("readProduct <productId>")
    .aliases(["rp", "product"])
    .description("Read a Product by productId")
    .action((productId: number) => productWrapper.read(Number(productId)));

  // Delete a Product by productId
  App.command("removeProduct <productId>")
    .aliases(["rmp", "dP"])
    .description("Delete a Product by productId")
    .action((productId: number) => productWrapper.remove(Number(productId)));

  // Update a Product by productId passing name, description, price and count
  App.command("updateProduct <productId> <name> <description> <price> <count>")
    .aliases(["up", "pP"])
    .description(
      "Update a Product by productId passing name, description, price and count"
    )
    .action(
      (
        productId: number,
        name: string,
        description: string,
        price: number,
        count: number
      ) => {
        const product = new productDefinition(
          name,
          description,
          Number(price),
          Number(count)
        );

        productWrapper.update(Number(productId), product);
      }
    );
}
