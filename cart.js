const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be < //completed
      total += cart[i].price; // Bug: cartItems[i] is undefined on the last iteration //completed
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if (!isNaN(discountRate) && discountRate >= 0 && discountRate <= 1 ) { //added a check to ensure discountRate is a number between 0 and 1
    return total - total * discountRate; // Bug: Missing validation for discountRate
  }else {
    throw new TypeError("Discount rate must be a number between 0 and 1.");
  }
}


function generateReceipt(cartItems, total) {
  if (typeof total !== "number" || isNaN(total) ) { //added a if/else statment to check if total is a number
    throw new TypeError("Total must be valid number.")
  }

  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number //added a if statment for a custom error incase the total is not a number
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

let totalElement = document.getElementById("total").textContent = `Total: $${discountedTotal}`;
let receiptElement = document.getElementById("receipt").textContent = receipt;


console.log(totalElement);
console.log(receiptElement);