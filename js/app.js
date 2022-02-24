'use strict';

// Cart constructor.
const Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  this.product = product;
  this.quantity = quantity;
};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  let stringifiedProducts = JSON.stringify(allProducts);
  // Step 1: Stringifying data
  // let stringifiedProducts = JSON.stringify(allProducts);
  // console.log('stringified products', stringifiedProducts);

  localStorage.setItem('cart', stringifiedProducts);
  // step 2: Setting itme into local storage
  // localStorage.setItem('products', stringifiedProducts);
  let retreivedProducts = localStorage.getItem('cart');
  //   // Step 3: Getting it out of local storage
  // let retreivedProducts = localStorage.getItem('products');

  // console.log('retrieved products', retreivedProducts);
  let parsedProducts = JSON.parse(retreivedProducts); // 
  // // Step 4: Parse data for code to be read

  // let parsedProducts = JSON.parse(retreivedProducts);

  // console.log('parsed products', parsedProducts);
};

Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
  this.item.splice(item , 1);
};

const CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
const Product = function(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `assets/${name}.${fileExtension}`;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('Bag');
  new Product('Banana');
  new Product('Bathroom');
  new Product('Boots');
  new Product('Breakfast');
  new Product('Bubblegum');
  new Product('Chair');
  new Product('Cthulhu');
  new Product('Dog-Duck');
  new Product('Dragon');
  new Product('Pen');
  new Product('Pet Sweep');
  new Product('Scissors');
  new Product('Shark');
  new Product('Sweep', 'png');
  new Product('Taun-Taun');
  new Product('Unicorn');
  new Product('Water Can');
  new Product('Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
