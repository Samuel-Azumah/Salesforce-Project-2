let cartFromStorage = JSON.parse(localStorage.getItem("cart"));

// increment cart number
if (cartFromStorage) {
  $(".cart-number").text(
    cartFromStorage.length != null ? cartFromStorage.length : 0
  );
}
function calculateSum() {
  if (cartFromStorage) {
    let sum = 0;
    for (let i = 0; i < cartFromStorage.length; i++) {
      sum += cartFromStorage[i].price * cartFromStorage[i].quantity;
      $(".cart-sum").text("GHC" + (sum += cartFromStorage[i].price));
    }
  }
}

calculateSum();

function generateCartItems() {
  if (cartFromStorage != null) {
    for (let i = 0; i < cartFromStorage.length; i++) {
      let productElement = "";
      productElement = `
        <div class="${cartFromStorage[i].id}" id="cart-item">
<hr class='divider'>
<img src="../product/${cartFromStorage[i].image}"> </img>
<p>GHC ${cartFromStorage[i].price}</p>
<p>Number of items: ${cartFromStorage[i].quantity}</p>
<p>Color: ${cartFromStorage[i].color}</p>
<button class="delete">Delete from cart</button>
        </div>
        `;
      $(".cart-container").append(productElement);
    }

    for (let j = 0; j < $(".cart-container").children().length; j++) {
      document.querySelectorAll(".delete").forEach((element) => {
        element.addEventListener("click", deleteFromCart);
      });
    }
  }
}

const button = document.querySelector("button");
let out;
button.addEventListener("click", () => {
  localStorage.removeItem("cart");
  cartFromStorage = [];
  $(".cart-container").empty();

  // increment cart number
  $(".cart-number").text(
    cartFromStorage.length != null ? cartFromStorage.length : 0
  );
  calculateSum();

  confirm("Thank you for shopping with us");
});

function deleteFromCart(event) {
  for (let i = 0; i < cartFromStorage.length; i++) {
    if (event.target.parentElement.className == cartFromStorage[i].id) {
      cartFromStorage.splice(i, 1);
      $(`.${event.target.parentElement.className}`).remove();
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(cartFromStorage));
    }
  }

  // increment cart number
  $(".cart-number").text(
    cartFromStorage.length != null ? cartFromStorage.length : 0
  );
  calculateSum();
}

generateCartItems();
