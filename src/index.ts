import { Command } from "commander";

import UserProgram from "./program/user.program";
import ProductProgram from "./program/product.program";
import CartProgram from "./program/cart.program";
import checkoutProgram from "./program/checkout.program";

const App = new Command();

App.version("1.0.0").description(
  `Client Application Interface for the Mini art API
https://github.com/Otumian-empire/ts-mini-mart`
);

UserProgram(App);
ProductProgram(App);
CartProgram(App);
checkoutProgram(App);

App.parse(process.argv);
