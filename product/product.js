let shoppingCart = [];
let currentProduct;

const ArrayOfProducts = [
  {
    id: 1,
    image: "image1.jpeg",
    name: "Cotton 100%",
    price: 30,
    addCart: 0,
    description:
      "This shirt is made with Primeblue fabric, a performance fabric made entirely from recycled plastic material. It's made of 50% Parley Ocean Plastic, which is marine plastic waste collected from beaches and coastal regions.",
  },

  {
    id: 2,
    image: "image2.jpeg",
    name: "Cotton 80% and Silk 20%",
    price: 35,
    addCart: 0,
    description:
      "It's made of moisture-absorbing fabric with a soft, cotton-like feel. Forward-shifted seams reduce chafing in high-sweat areas while a slight droptail hem adds coverage in back.",
  },
  {
    id: 3,
    image: "image3.jpeg",
    name: "Cotton 100%",
    price: 40,
    addCart: 0,
    description: "The soft all-cotton fabric keeps you comfortable all day.",
  },
  {
    id: 4,
    image: "image4.jpeg",
    name: "Cotton 70% and Silk 30%",
    price: 50,
    addCart: 0,
    description:
      " Simple t-shirt. Big moves. Tackle your day in the soft comfort and casual style of this cotton tee and win big with your brand by your side. ",
  },
  {
    id: 5,
    image: "image5.jpeg",
    name: "Cotton 70% and Silk 20%",
    price: 40,
    addCart: 0,
    description:
      "This casual shirt is made of soft cotton that keeps you feeling comfortable all day long.",
  },
];

const ArrayOfShoes = [
  {
    id: 6,
    image: "shoe1.jpeg",
    name: "Balenciaga",
    price: 230,
    addCart: 0,
    description:
      "Featuring bold color-blocking inspired by MJ's most formidable rivals, the Air Jordan 2 Retro for men re-energizes the '86 original. Its luxurious upper uses a clashing mix of textiles and leathers for a unique look and feel.",
  },

  {
    id: 7,
    image: "shoe2.jpeg",
    name: "Jordan Air",
    price: 135,
    addCart: 0,
    description:
      "Bring the past into the future with the Jordan Air. Inspired by the iconic Air Max 90, the 2090 features Nike Air cushioning underfoot that adds unparalleled comfort, while transparent mesh on the upper blends with timeless OG features for an edgy, modernized look.",
  },
  {
    id: 8,
    image: "shoe3.jpeg",
    name: "Jordan React Elevation",
    price: 140,
    addCart: 0,
    description:
      "The Jordan React Elevation is inspired by team players who beat opponents with their grit and tenacity at both ends of the court. Light and durable, it offers a secure, supportive fit. An underfoot combination of responsive cushioning and herringbone traction helps keep you on your game during clutch moments.",
  },
  {
    id: 9,
    image: "shoe6.jpeg",
    name: "Air Force 1",
    price: 250,
    addCart: 0,
    description:
      "Pass on the good vibes in the Air Force 1. Elegant and versatile, its mixed-material upper features a plush collar, flashy colors and unique stitching patterns. The Nike Air cushioning adds a modern twist, comfort and style to your journey.",
  },
  {
    id: 10,
    image: "shoe5.jpeg",
    name: "Nested Jordan Air 2019",
    price: 230,
    addCart: 0,
    description:
      "30 years after the icon’s release, the Nested Jordan Air 2019 brings it back in a kid-right design. Cushioning is softer and more flexible, the Air unit is tuned for growing feet and the shape gives toes more wiggle room. With a design and look that are still the same, it brings a 90s fave to a new generation.",
  },
];

const ArrayOfcarsbutton = [
  {
    id: 11,
    image: "car1.jpeg",
    name: "Mercedes Benz c300",
    price: 230000,
    addCart: 0,
    description:
      "The new Mercedes-Maybach S-Class is set to continue this success story. It combines the perfection and high-tech solutions of the only recently presented Mercedes-Benz flagship model with the exclusivity and tradition of Maybach. The 18 centimetre longer wheelbase compared to the long variant of the Mercedes-Benz S-Class entirely benefits the rear.",
  },

  {
    id: 12,
    image: "car2.jpeg",
    name: "G Wagon 2020",
    price: 135000,
    addCart: 0,
    description:
      "The exclusive style of the brand and its products is designed with perfect workmanship and uncompromising attention to detail. This aesthetic becomes particularly tangible in the new designo backrest trim.",
  },
  {
    id: 13,
    image: "car3.jpeg",
    name: "Mercedes Benz s Class",
    price: 140000,
    addCart: 0,
    description:
      "The S-Class stands for the fascination of Mercedes-Benz: legendary and traditional engineering expertise defines the luxury segment in the automobile industry. The new S-Class can be experienced with all the senses – seeing, feeling, hearing and smelling – while offering numerous innovations in the areas of driver assistance, protection and interaction.",
  },
  {
    id: 14,
    image: "car4.jpeg",
    name: "Mercedes Benz maybach",
    price: 250000,
    addCart: 0,
    description:
      "The Mercedes-Maybach S-Class (length/width/height: 5,469/1,921/1,510 millimetres) is a classic three-box saloon. Distinguishing features at the front include the distinctive bonnet with a chromed fin and the Mercedes-Maybach radiator grille. This is highly recognisable by its vertical, three-dimensional trim strips. ",
  },
  {
    id: 15,
    image: "car5.jpeg",
    name: "Mercedes Benz e350",
    price: 230000,
    addCart: 0,
    description:
      "Excellent comfort and ultimate luxury – especially in the rear – are the top-most priority. Innovative details and exquisite materials make the Mercedes Benz e350 a refuge that offers the brand’s hallmark experience of luxury.",
  },
];

const clothesbutton = document.querySelector(".clothesbutton");
const sneakersbutton = document.querySelector(".sneakersbutton");
const carsbutton = document.querySelector(".carsbutton");

clothesbutton.addEventListener("click", () => {
  $(".products-div").empty();
  for (let j = 0; j < ArrayOfProducts.length; j++) {
    let imageDiv = $(".products-div");
    console.dir(imageDiv);
    let element = ``;
    element = `<div id='productItems' class='${ArrayOfProducts[j].id}'>
                <img src=${ArrayOfProducts[j].image} style="width: 100px" ><a href="../checkOut/checkOut.html"></a></img>
                <p>${ArrayOfProducts[j].name}</p>
                <p>${ArrayOfProducts[j].price}</p>
                </div>`;
    imageDiv.append(element);
  }
  //$("#productItems").click(showPopUp);

  for (let j = 0; j < $(".products-div").children().length; j++) {
    document.querySelectorAll("#productItems").forEach((element) => {
      element.addEventListener("click", showPopUp);
    });
  }
});

sneakersbutton.addEventListener("click", () => {
  $(".products-div").empty();
  for (let j = 0; j < ArrayOfShoes.length; j++) {
    let imageDiv = $(".products-div");
    console.dir(imageDiv);
    let element = ``;
    element = `<div id='productItems' class='${ArrayOfShoes[j].id}'>
                <img src=${ArrayOfShoes[j].image} style="width: 100px"><a href="../checkOut/checkOut.html"></a></img>
                <p>${ArrayOfShoes[j].name}</p>
                <p>${ArrayOfShoes[j].price}</p>
                </div>`;
    imageDiv.append(element);
  }

  for (let j = 0; j < $(".products-div").children().length; j++) {
    document.querySelectorAll("#productItems").forEach((element) => {
      element.addEventListener("click", showPopUp);
    });
  }
  //    $('#productItems').click(showPopUp);
});

carsbutton.addEventListener("click", () => {
  $(".products-div").empty();
  for (let j = 0; j < ArrayOfcarsbutton.length; j++) {
    let imageDiv = $(".products-div");
    console.dir(imageDiv);
    let element = ``;
    element = `<div id='productItems' class='${ArrayOfcarsbutton[j].id}'>
                <img src=${ArrayOfcarsbutton[j].image} style="width: 100px"><a href="../checkOut/checkOut.html"></a></img>
                <p>${ArrayOfcarsbutton[j].name}</p>
                <p>${ArrayOfcarsbutton[j].price}</p>
                </div>`;
    imageDiv.append(element);
  }

  for (let j = 0; j < $(".products-div").children().length; j++) {
    document.querySelectorAll("#productItems").forEach((element) => {
      element.addEventListener("click", showPopUp);
    });
  }
  //   $('#productItems').click(showPopUp);
});

// Add to Cart and Local Storage

function addToCart(event) {
  console.log(event.target.parentElement.className);

  for (let i = 0; i < ArrayOfProducts.length; i++) {
    if (event.target.parentElement.className == ArrayOfProducts[i].id) {
      ArrayOfProducts[i].color = $(".colorSelector").val();
      ArrayOfProducts[i].quantity = $(".inputstyle").val();
      shoppingCart.push(ArrayOfProducts[i]);
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(shoppingCart));
    }
  }

  for (let i = 0; i < ArrayOfShoes.length; i++) {
    ArrayOfShoes[i].color = $(".colorSelector").val();
    ArrayOfshoes[i].quantity = $(".inputstyle").val();
    if (event.target.parentElement.className == ArrayOfShoes[i].id) {
      shoppingCart.push(ArrayOfShoes[i]);
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(shoppingCart));
    }
  }

  for (let i = 0; i < ArrayOfcarsbutton.length; i++) {
    if (event.target.parentElement.className == ArrayOfcarsbutton[i].id) {
      ArrayOfcarsbutton[i].color = $(".colorSelector").val();
      ArrayOfcarsbutton[i].quantity = $(".inputstyle").val();
      shoppingCart.push(ArrayOfcarsbutton[i]);
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(shoppingCart));
    }
  }

  // increment cart number
  $(".cart-number").text(shoppingCart.length);

  closePopUp();
}

function showPopUp() {
  $("#product-container").remove();
  for (let i = 0; i < ArrayOfProducts.length; i++) {
    if (event.target.parentElement.className == ArrayOfProducts[i].id) {
      currentProduct = ArrayOfProducts[i];
    }
  }

  for (let i = 0; i < ArrayOfShoes.length; i++) {
    if (event.target.parentElement.className == ArrayOfShoes[i].id) {
      currentProduct = ArrayOfShoes[i];
    }
  }

  for (let i = 0; i < ArrayOfcarsbutton.length; i++) {
    if (event.target.parentElement.className == ArrayOfcarsbutton[i].id) {
      currentProduct = ArrayOfcarsbutton[i];
    }
  }

  let currentProductElement = "";
  currentProductElement = `
    <div id="product-container space" class="${currentProduct.id}">
    <h3>${currentProduct.name}</h3>
<img class="product-image" src="${currentProduct.image}">
<h3>${currentProduct.price}</h3>
<p>${currentProduct.description}</p>
<button class="addToCart">add to cart</button>
    </div>
    `;

  $(".product-content").prepend(currentProductElement);
  $(".close").click(closePopUp);
  $(".addToCart").click(addToCart);
  $(".modal").css("display", "block");
}

function closePopUp() {
  $(".modal").css("display", "none");
}

// increment cart number
$(".cart-number").text(shoppingCart.length);
