/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);
let count = 0;
Product.allProducts;

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  const value = function () {
    Product.allProducts.forEach(Object => {
      let option = document.createElement('option');
      selectElement.appendChild(option);
      option.textContent = `${Object.name}`;

    })

  }
  value();
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  let handleSubmit = function (event) {
    event.preventDefault();

    let listitemQuantity = document.getElementById('quantity');
    let quantity = parseInt(listitemQuantity.value);
    if (quantity > 0) {

      addSelectedItemToCart();
      cart.saveToLocalStorage();
      updateCounter();
      updateCartPreview();
    }
  }





  // TODO: Prevent the page from reloading

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {

  let listItem = document.getElementById('items');
  let selected = listItem.value;
  let listitemQuantity = document.getElementById('quantity');
  let quantity = parseInt(listitemQuantity.value);
  cart.addItem(selected, quantity);



  function updateCounter() {








    let itemCount = document.getElementById('itemCount');
    count++;
    itemCount.textContent = `${count}`;


  }








  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
} let listItem = document.getElementById('items');
let selected = listItem.value;

let listitemQuantity = document.getElementById('quantity');
let quantity = parseInt(listitemQuantity.value);

const cartContents = document.getElementById('cartContents');
let cartListItem = document.createElement('div');
cartContents.appendChild(cartListItem);

let cartListItemName = document.createElement('span');
cartListItemName.setAttribute('class', 'left-col');
cartListItem.appendChild(cartListItemName);
cartListItemName.textContent = `${selected}`;

let cartListItemQuan = document.createElement('span');
cartListItemQuan.setAttribute('class', 'right-col');
cartListItem.appendChild(cartListItemQuan);
cartListItemQuan.textContent = `${quantity}`;

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
