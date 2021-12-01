/*
Author: Ismael Carpio
Date: 11/20/2021
Description:  Javascript file to support functionality in K-pop n shop application
*/

//Inventory array
const inventory = [
    {
        id:1,
        item: "Foxy Raccoon T-Shirt",
        price: 19.99
    },
    {
        id:2,
        item: "Girls Generation Collection Cards",
        price: 9.99
    }
];

let cart = [];
let count = 0;
let cartCount = document.querySelector("#cartCount");
let itemSelection = document.querySelector("#itemSelection");
let grandTotal = document.querySelector("#total");

let buttons = document.querySelectorAll('.addcart');
buttons.forEach(
    (btn) => { 
        btn.addEventListener("click", () => { 
           addToCart(btn.dataset.id);
        }); 
    });

function addToCart(itemId){
    let item = inventory.find(obj => obj.id == itemId);
        count = cart.push(item);
      let txt = "";
      let total = 0;
      for (const obj of cart){
        txt += "Item: " + obj.item + "<br/>" + "Price: $" + obj.price + "<hr/>" ;
        total += obj.price;
    }
        itemSelection.innerHTML = txt;
        grandTotal.innerHTML = "Grand Total: $" + total.toPrecision(4);
        cartCount.textContent = count.toString();
      alert(count + " item(s) added to cart");
    
    }