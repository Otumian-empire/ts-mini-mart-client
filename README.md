# ts-mini-mart-client

ts-mini-mart-client is a basic command line interface (client) that consumes the [ts-mini-mart api]. ts-mini-mart is for anyone who is interested in tinkering or learning from the [ts-mini-mart api]. Currently as of this version, the ts-mini-mart-client communicates with the [ts-mini-mart api] directly from the terminal by passing the needed data inline the commands for exploring [ts-mini-mart api].

## How do I use it? (installation instructions)

- clone ts-mini-mart-api from github, `git clone https://github.com/Otumian-empire/ts-mini-mart.git`
- Follow the instructions in the README.md and the DOCS.md to set up the backend
- clone ts-mini-mart-client from github, `git clone https://github.com/Otumian-empire/ts-mini-mart-client.git`
- change directory into the project folder, `cd ts-mini-mart-client`
- install the packages, `npm i`
- open another terminal and run, `psql postgres`
- When psql console opens, enter, `drop database ts_mini_mart_db;` (It is okay if there is an error like, 'ERROR: database "ts_mini_mart_db" does not exist'. It means it might be your first time creating the `ts_mini_mart_db` database.
- Enter, `create database ts_mini_mart_db;`
- Enter, `\q` to quit out from the `psql` console.

> You may choose to close the terminal if you wish or may keep it open to rerun the previous commands to reset the database later.

## How does it work?

There are four entities involved which are User (u), Product (p), Cart (c) and Checkout (k).

For a CRUD operation, we have Create (c), Read (r, l), Delete (rm) and Update (u).

There is a script, `npm start` which runs the client application. It will also display some information regarding the how the client works, `CRUD`ing.

This is how it looks like:

```
Usage: index [options] [command]

Client Application Interface for the Mini art API
https://github.com/Otumian-empire/ts-mini-mart

Options:
  -V, --version                                                      output the version number
  -h, --help                                                         display help for command

Commands:
  createUser|cu <name> <email> <address>                             Add user with name, email and address
  listUsers|lu                                                       List all Users
  readUser|ru <userId>                                               Read a User by userId
  removeUser|rmu <userId>                                            Delete User by userId
  updateUser|uu <userId> <name> <email> <address>                    Update User by userId passing the name, email and address
  createProduct|cp <name> <description> <price> <count>              Add Product with name, description, price and count
  listProducts|lp                                                    List all Products
  readProduct|rp <productId>                                         Read a Product by productId
  removeProduct|rmp <productId>                                      Delete a Product by productId
  updateProduct|up <productId> <name> <description> <price> <count>  Update a Product by productId passing name, description, price and count
  createCart|cc <userId> <productId> <productCount>                  Add cart with userId, productId and productCount
  listCarts|lc                                                       List all Carts
  readCart|rc <userId>                                               Read all Cart items By userId
  readCartX|rcx <userId> <cartId>                                    Read one specific Cart item of a User by passing the userId and cartId
  removeCart|rmc <userId>                                            Delete Cart by userId
  removeCartX|rmcx <userId> <cartId>                                 Delete a specific Cart item of a User by passing userId and cartId
  updateCart|uc <userId> <cartId> <productCount>                     Update Cart of a User with userId, cartId and  productCount
  createCheckout|ck <userId>                                         Add Checkout with userId
  listCheckouts|lk                                                   List all Checkouts
  readCheckout|rk <userId>                                           Read all Checkout items by User with userId
  removeCheckout|rmk <userId>                                        Delete Checkout by of a User by userId
  removeCheckoutX|rmkx <userId> <checkoutId>                         Delete a specific Checkout item of User with userId and checkoutId
  help [command]                                                     display help for command
```

## Example: User

We will be making use of the aliases instead of the main commands and the `npm start` script.

### Create User

From the above, the User entity requires three required fields. These fields are name, email and address.

`npm start -- cu "John Doe" johndoe@gmail.com "42 Foo street"`

This will create a User then return:

```js
{ success: true, message: 'Created successfully' }
```

Assuming there was an error with the values passed, we'd get a message saying so.

We could also get:

```js
{ success: false, message: 'An error occurred' }
```

Which would be an error (Exception) from the API, maybe, there user already exists.

### List Users

Assuming you took the opportunity and create several users then we could list all the users available. No argument is needed.

```js
npm start -- lu
```

This will return a list of all the users:

```js
[
  {
    id: 1,
    createdAt: "2022-01-02T16:17:59.240Z",
    updatedAt: "2022-01-02T16:17:59.240Z",
    name: "John Doe",
    email: "johndoe@gmail.com",
    address: "42 Foo street",
  },
];
```

### Read a User by userId

We have to pass the ID of an existing user as argument after the command.

```js
npm start -- ru 1
```

This will return:

```js
{
  id: 1,
  createdAt: '2022-01-02T16:17:59.240Z',
  updatedAt: '2022-01-02T16:17:59.240Z',
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  address: '42 Foo street'
}
```

else we'd get:

```js
{ success: false, message: 'Invalid user' }
```

There will be an error when the userId is not passed.

### Update User

We can update an existing user by `userId` passing the `name`, `email` and `address` to be updated. If we want to just change, `name`, we pass an argument to the position of name, say `"Butter Doe"` and pass `""` for both `email` and `address`.

```js
npm start -- uu 1 "Butter Doe" "" ""
```

This will return:

```js
{ success: true, message: 'Updated successfully' }
```

When we read the user by ID, `npm start -- ru 1`, we'd get:

```js
{
  id: 1,
  createdAt: '2022-01-02T16:17:59.240Z',
  updatedAt: '2022-01-02T16:43:08.127Z',
  name: 'Butter Doe',
  email: 'johndoe@gmail.com',
  address: '42 Foo street'
}
```

### Delete User by userId

Delete an existing by passing the userId after the command.

```js
npm start -- rmu 1
```

This will return:

```js
{ success: true, message: 'Deleted successfully' }
```

There will be an error if the userId passed does not exist or the userId was not passed.

## Example: Product

### Create Product

To create a Product, we need to pass the product name, description, price and count (quantity) after the command.

```js
npm start -- cp "Foo" "Best joke ever" 120 2
```

This will return:

```js
{ success: true, message: 'Created successfully' }
```

### List all Products

There is no argument needed. This returns all the products available. Before we do that, let's create other products.

```js
npm start -- cp "Bar" "The worst cat in the area" 300 3
npm start -- cp "Hammer" "The bread of life" 10 5
```

Now let's list all the products:

```js
npm start -- lp
```

This will return;

```js
[
  {
    id: 1,
    createdAt: "2022-01-02T18:46:44.677Z",
    updatedAt: "2022-01-02T18:46:44.677Z",
    name: "Foo",
    description: "Best joke ever",
    price: "£120.00",
    count: 2,
  },
  {
    id: 2,
    createdAt: "2022-01-02T18:48:52.583Z",
    updatedAt: "2022-01-02T18:48:52.583Z",
    name: "Bar",
    description: "The worst cat in the area",
    price: "£300.00",
    count: 3,
  },
  {
    id: 3,
    createdAt: "2022-01-02T18:49:43.882Z",
    updatedAt: "2022-01-02T18:49:43.882Z",
    name: "Hammer",
    description: "The bread of life",
    price: "£10.00",
    count: 5,
  },
];
```

### Read a Product by productId

Pass the productId as an argument after the command.

```js
npm start -- rp 2
```

This will return:

```js
{
  id: 2,
  createdAt: '2022-01-02T18:48:52.583Z',
  updatedAt: '2022-01-02T18:48:52.583Z',
  name: 'Bar',
  description: 'The worst cat in the area',
  price: '£300.00',
  count: 3
}
```

This will return an error if the productId is not available or is not passed.

### Update a Product

Update a Product by productId by passing the name, description, price and count. For the field you don't need to update, pass, an empty string, `""` or zero, `0`. Let's update product with productId, 2. We will change the description to something more powerful.

```js
npm start -- up 2 "" "Bar is the only Bar that exists in this world" 0  0
```

This will return on success:

```js
{ success: true, message: 'Updated successfully' }
```

There could be an error.

Let's select the product with the productId, 2 to see if the update actually worked.

```js
npm start -- rp 2
```

This will return:

```js
{
  id: 2,
  createdAt: '2022-01-02T18:48:52.583Z',
  updatedAt: '2022-01-02T18:55:35.031Z',
  name: 'Bar',
  description: 'Bar is the only Bar that exists in this world',
  price: '£300.00',
  count: 3
}
```

### Delete a Product by productId

To delete a product we need to pass the productId as argument after the command.

```js
npm start -- rmp 2
```

This is will return:

```js
{ success: true, message: 'Deleted successfully' }
```

Let's list all the products to see if there will be a product with productId, 2.

```js
npm start -- lp
```

This will return:

```js
[
  {
    id: 1,
    createdAt: "2022-01-02T18:46:44.677Z",
    updatedAt: "2022-01-02T18:46:44.677Z",
    name: "Foo",
    description: "Best joke ever",
    price: "£120.00",
    count: 2,
  },
  {
    id: 3,
    createdAt: "2022-01-02T18:49:43.882Z",
    updatedAt: "2022-01-02T18:49:43.882Z",
    name: "Hammer",
    description: "The bread of life",
    price: "£10.00",
    count: 5,
  },
];
```

## Example: Cart

To create a Cart item, we need a user and a product. From the user, we pass the userId since a user must own the items in the cart. The from the product we'd get the productId and the quantity of the said product we are interested in buying.

### Create cart

Create cart with userId, productId and productCount. Assuming we are starting from scratch, let's create some users and some products.

```js
npm start -- cu can can@gmail.com "12 CC street"
npm start -- cu ban dan@gmail.com "12 BB street"

npm start -- lu
```

We'd have:

```js
[
  {
    id: 1,
    createdAt: "2022-01-02T19:58:25.515Z",
    updatedAt: "2022-01-02T19:58:25.515Z",
    name: "can",
    email: "can@gmail.com",
    address: "12 CC street",
  },
  {
    id: 2,
    createdAt: "2022-01-02T19:58:30.343Z",
    updatedAt: "2022-01-02T19:58:30.343Z",
    name: "ban",
    email: "dan@gmail.com",
    address: "12 BB street",
  },
];
```

Now let's create some products to work with.

```js
npm start -- cp "Milk" "The best milk from the cow" 5.99 5
npm start -- cp "Honey" "There is no honey than the honey from a bee" 6.99 3
npm start -- cp "Cheese" "What makes a cheese cheese is Cheese" 8.99 4

npm start -- lp
```

Now we'd get three products:

```js
[
  {
    id: 1,
    createdAt: "2022-01-02T19:58:40.525Z",
    updatedAt: "2022-01-02T19:58:40.525Z",
    name: "Milk",
    description: "The best milk from the cow",
    price: "£5.99",
    count: 5,
  },
  {
    id: 2,
    createdAt: "2022-01-02T19:58:45.756Z",
    updatedAt: "2022-01-02T19:58:45.756Z",
    name: "Honey",
    description: "There is no honey than the honey from a bee",
    price: "£6.99",
    count: 3,
  },
  {
    id: 3,
    createdAt: "2022-01-02T19:58:50.540Z",
    updatedAt: "2022-01-02T19:58:50.540Z",
    name: "Cheese",
    description: "What makes a cheese cheese is Cheese",
    price: "£8.99",
    count: 4,
  },
];
```

Let's create our carts now. Let's allow user with userId, 1, to add product with productId 1 and 2 to cart.

```js
npm start -- cc 1 1 1
npm start -- cc 1 2 1
```

Let's allow user with userId, 2, to add product with productId 1 and 3 to cart.

```js
npm start -- cc 2 1 1
npm start -- cc 2 3 1
```

### List all Carts

We can list all of the items we have in cart.

```js
npm start -- lc
```

This will return:

```js
[
  {
    id: 1,
    createdAt: "2022-01-02T20:00:40.487Z",
    updatedAt: "2022-01-02T20:00:40.487Z",
    userId: 1,
    productId: 1,
    productCount: 1,
  },
  {
    id: 2,
    createdAt: "2022-01-02T20:00:44.468Z",
    updatedAt: "2022-01-02T20:00:44.468Z",
    userId: 1,
    productId: 2,
    productCount: 1,
  },
  {
    id: 3,
    createdAt: "2022-01-02T20:00:48.713Z",
    updatedAt: "2022-01-02T20:00:48.713Z",
    userId: 2,
    productId: 1,
    productCount: 1,
  },
  {
    id: 4,
    createdAt: "2022-01-02T20:00:55.626Z",
    updatedAt: "2022-01-02T20:00:55.626Z",
    userId: 2,
    productId: 3,
    productCount: 1,
  },
];
```

### Read all Cart items By userId

We will read all the cart items of a particular with userId, 1

```js
npm start -- rc 1
```

This will return:

```js
[
  {
    id: 1,
    createdAt: "2022-01-02T20:00:40.487Z",
    updatedAt: "2022-01-02T20:00:40.487Z",
    userId: 1,
    productId: 1,
    productCount: 1,
  },
  {
    id: 2,
    createdAt: "2022-01-02T20:00:44.468Z",
    updatedAt: "2022-01-02T20:00:44.468Z",
    userId: 1,
    productId: 2,
    productCount: 1,
  },
];
```

### Read one specific Cart item of a User

We can read one specific cart item of a User by passing the userId and cartId. This way can know the quantity of a product we added to cart. User with userId, 1 has two items in the cart. Let's read the first item with cartId, 1.

```js
npm start -- rcx 1 1
```

We will get:

```js
{
  id: 1,
  createdAt: '2022-01-02T20:00:40.487Z',
  updatedAt: '2022-01-02T20:00:40.487Z',
  userId: 1,
  productId: 1,
  productCount: 1
}
```

### Update Cart of a User with userId, cartId and productCount

From the above we can see that cart of cartId, 1 belongs to user with userId, 1. Let's update the productCount to 3.

```js
npm start -- uc 1 1 3
```

This will return:

```js
{ success: true, message: 'Updated successfully' }
```

If this actually worked then let's read that specific cart item:

```js
npm start -- rcx 1 1
```

Now the cart item will look like this:

```js
{
  id: 1,
  createdAt: '2022-01-02T20:00:40.487Z',
  updatedAt: '2022-01-02T20:14:54.289Z',
  userId: 1,
  productId: 1,
  productCount: 3
}
```

### Delete Cart by userId

We can all the cart items added by a particular user, passing the userId. Let's delete the cart items of user with userId, 1.

The currently we know that user with userId, 1 has two items.

```js
npm start -- rc 1
```

Which will return:

```js
[
  {
    id: 2,
    createdAt: "2022-01-02T20:00:44.468Z",
    updatedAt: "2022-01-02T20:00:44.468Z",
    userId: 1,
    productId: 2,
    productCount: 1,
  },
  {
    id: 1,
    createdAt: "2022-01-02T20:00:40.487Z",
    updatedAt: "2022-01-02T20:14:54.289Z",
    userId: 1,
    productId: 1,
    productCount: 3,
  },
];
```

```js
npm start -- rmc 1
```

This will return:

```js
{ success: true, message: 'Deleted successfully' }
```

An empty list will be returned when we run:

```js
npm start -- rc 1
```

### Delete a specific Cart item

We can also delete a specific Cart item of a User by passing userId and cartId. User with userId, 2 owns cart item with cartId, 3. Let's delete it.

```js
npm start -- rmcx 2 3
```

This returned:

```js
{ success: true, message: 'Deleted successfully' }
```

Now now cart item with cartId, 3 owned by user with userId 2, no longer exists.

```js
npm start -- rcx 2 3
```

And as such we'd get:

```js
{ success: false, message: 'Invalid cart' }
```

## Example: Checkout

### Create Checkout with userId

For a checkout, the said user must at least an item in cart. To checkout all the product put into cart by a user all you have to do is pass the said userId after the command.

Let's list all the cart items and see its content and if we have to add products or increment the productCount, we'd do that.

```js
npm start -- lc
```

Okay, so this is what we have in the cart currently:

```js
[
  {
    id: 4,
    createdAt: "2022-01-02T20:00:55.626Z",
    updatedAt: "2022-01-02T20:00:55.626Z",
    userId: 2,
    productId: 3,
    productCount: 1,
  },
];
```

Let's create a checkout for the current item we have in cart using the userId, 2.

```js
npm start -- ck 2
```

This returned:

```js
{ success: true, message: 'Created successfully' }
```

What happens is that the cart will be deleted for user with userId, 2.

```js
npm start -- lc
```

### List all Checkouts

We can list all the checkout done so far.

```js
npm start -- lk
```

This will return:

```js
[
  {
    id: 1,
    createdAt: "2022-01-02T21:11:35.236Z",
    updatedAt: "2022-01-02T21:11:35.236Z",
    userId: 2,
    productIds: [3],
    productCounts: [1],
    totalCost: "£8.99",
  },
];
```

### Read all Checkout items by User with userId

We can also read all checkout by a particular user, using the userId. Let's add more product to cart using user with usrId, 1.

```js
npm start -- cc 1 1 1
npm start -- cc 1 2 2
npm start -- cc 1 3 2
```

So after running the above commands, we'd have:

```js
[
  {
    id: 5,
    createdAt: "2022-01-02T21:46:08.364Z",
    updatedAt: "2022-01-02T21:46:08.364Z",
    userId: 1,
    productId: 1,
    productCount: 1,
  },
  {
    id: 6,
    createdAt: "2022-01-02T21:46:15.225Z",
    updatedAt: "2022-01-02T21:46:15.225Z",
    userId: 1,
    productId: 2,
    productCount: 2,
  },
  {
    id: 7,
    createdAt: "2022-01-02T21:46:21.995Z",
    updatedAt: "2022-01-02T21:46:21.995Z",
    userId: 1,
    productId: 3,
    productCount: 2,
  },
];
```

After running:

```js
npm start -- rc 1
```

Now we can create checkout for user with userId, 1.

```js
npm start -- ck 1
```

Now let's read all checkout

```js
npm start -- lk
```

We'd have:

```js
[
  {
    id: 1,
    createdAt: "2022-01-02T21:11:35.236Z",
    updatedAt: "2022-01-02T21:11:35.236Z",
    userId: 2,
    productIds: [3],
    productCounts: [1],
    totalCost: "£8.99",
  },
  {
    id: 2,
    createdAt: "2022-01-02T21:49:38.738Z",
    updatedAt: "2022-01-02T21:49:38.738Z",
    userId: 1,
    productIds: [1, 2, 3],
    productCounts: [1, 2, 2],
    totalCost: "£37.95",
  },
];
```

### Delete Checkout by of a User by userId

We can delete a checkout of a user with userId. Let's do this for user with userId, 2.

```js
npm start -- rmk 2
```

And we got the response below after removing the checkout.

```js
{ success: true, message: 'Deleted successfully' }
```

Let's list all the checkouts.

```js
npm start -- lk
```

We'd get:

```js
[
  {
    id: 2,
    createdAt: "2022-01-02T21:49:38.738Z",
    updatedAt: "2022-01-02T21:49:38.738Z",
    userId: 1,
    productIds: [1, 2, 3],
    productCounts: [1, 2, 2],
    totalCost: "£37.95",
  },
];
```

### Delete a specific Checkout item

We can delete a specific Checkout item of User with userId and checkoutId.

```js
npm start -- rmkx 1 2
```

We'd get"

```js
{ success: true, message: 'Deleted successfully' }
```

So now, we'd have nothing in our checkout. We can verify that by running:

```js
npm start -- lk
```

## What's next

We accept PRs, Issues, and 🤪️. Thank you!!

#

[ts-mini-mart api]: https://github.com/Otumian-empire/ts-mini-mart
