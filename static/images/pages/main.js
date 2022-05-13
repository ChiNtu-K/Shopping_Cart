
//data items
var items = [
  {
    title: "Fresh Kiwi-Green,3Pcs",
    src: "../products/fruit-n-veg/kiwi-green.jpg",
    des: "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
    cost: 87,
    qty: 0,
  },
  {
    title: "Apple-Washington,Regular 4Pcs",
    src: "../products/fruit-n-veg/apple.jpg",
    des: "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slighty sweet Washington Apples are a natural.",
    cost: 187,
    qty: 0,
  },
  {
    title: "Fresh Pomegranate Peeled,500grams",
    src: "../products/fruit-n-veg/pomegrante.jpg",
    des: "Pomegranate variety has a glossy. vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white.",
    cost: 88,
    qty: 0,
  },
  {
    title: "Capsicum Green 1kg",
    src: "../products/fruit-n-veg/capsicum-green.jpg",
    des: "Leaving a moderately pungent taste on the tongue, Green capsicums, also known as green peppers are bell shaped, medium-sized fruit pods.",
    cost: 137,
    qty: 0,
  },
  {
    title: "Tomato,Local Organically Grown 500 gram",
    src: "../products/fruit-n-veg/tomato.jpg",
    des: "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes",
    cost: 12,
    qty: 0,
  },
  {
    title: "Sandwhich Bread,White Chemical free,400 gram",
    src: "../products/bakery-cakes-dairy/bread.jpg",
    des: "Freshly Baked bread is one of lifes greatest simple pleasure and at Bigbasket we decided to give you just that. We start baking our breads once.",
    cost: 32,
    qty: 0,
  },
  {
    title: "Organic Fresh Paneer,200 grams",
    src: "../products/bakery-cakes-dairy/paneer.jpg",
    des: "Freshly Baked bread is one of lifes greatest simple pleasure and at Bigbasket we defresh organic milk is sourced from farms that have been.",
    cost: 98,
    qty: 0,
  },
  {
    title: "Epigamia Greek Yogurt-Blueberry,90 gram cup",
    src: "../products/bakery-cakes-dairy/yogurt-blue.jpg",
    des: "Epigama means in ancient greek meant a way to formalize the relationship between different nations. Epigamia greek yogurt is one.",
    cost: 40,
    qty: 0,
  },
  {
    title: "Epigamia Greek Yogurt-Strawberry,90 gram cup",
    src: "../products/bakery-cakes-dairy/yogurt-red.jpg",
    des: "Low fat and high protein delicious and thick greek yogurt.",
    cost: 40,
    qty: 0,
  },
  {
    title: "TATA Tea Gold Leaf Tea,500 gram",
    src: "../products/beverages/tata-tea.jpg",
    des: "Tata tea gold is a unique blend of fine assam tea leaves with special 15% long leaf.",
    cost: 165,
    qty: 0,
  },
  {
    title: "Red Label Tea 500 gram-Carton",
    src: "../products/beverages/red-label.jpg",
    des: "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes",
    cost: 205,
    qty: 0,
  },
  {
    title: "Bounvita Pro-Health,Drink Chocolate,2x750 gram",
    src: "../products/beverages/bournvita.jpg",
    des: "Brooke bond red label is one of indias largest selling packaged tea brands. Brooke bond red label tea is a blend CTC tea with best quality.",
    cost: 572,
    qty: 0,
  },
  {
    title: "Coco-Cola Soft Drink ,2x1.75 L",
    src: "../products/beverages/coke.jpg",
    des: "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes",
    cost: 150,
    qty: 0,
  },
  {
    title: "Listerine Mouthwash-Cool Mint,250ml",
    src: "../products/beauty-hygiene/listerine.jpg",
    des: "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes",
    cost: 109,
    qty: 0,
  },
  {
    title: "TRESSeme Shampoo-Keratin Smooth with Argan Oil,580ml",
    src: "../products/beauty-hygiene/shampoo.jpg",
    des: "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes",
    cost: 410,
    qty: 0,
  },
  {
    title: "Dove Intense Repair Shampoo 650 ml + Bathing Bar Soap Cream",
    src: "../products/beauty-hygiene/dove.jpg",
    des: "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes",
    cost: 622,
    qty: 0,
  },
  {
    title: "Premier Facial Tissue-Special,400 pcs",
    src: "../products/beauty-hygiene/tissues.jpg",
    des: "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes",
    cost: 270,
    qty: 0,
  },
  {
    title: "Close Up Ever Fresh Red Hot Gel Toothpaste,150 gm",
    src: "../products/beauty-hygiene/closeup.jpg",
    des: "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes",
    cost: 82,
    qty: 0,
  },
  {
    title: "Pampers Diapers Pants-Large Size,Monthly Box Pack, New 128's Pack",
    src: "../products/baby/pampers.jpg",
    des: "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes",
    cost: 1999,
    qty: 0,
  },
  {
    title: "MamyPoko Pants Style Diapers-Large,62Pcs",
    src: "../products/baby/mamy.jpg",
    des: "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes",
    cost: 930,
    qty: 0,
  },
  {
    title: "Johnson & Johnson Baby Skincare Wipes,20Pcs",
    src: "../products/baby/wipes.jpg",
    des: "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes",
    cost: 70,
    qty: 0,
  },
  {
    title: "Nestle Ceralac Stage-4 Multigrain & Fruits,2X300 grams",
    src: "../products/baby/cerelac.jpg",
    des: "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes",
    cost: 478,
    qty: 0,
  },
  {
    title: "Baby Dove Baby Bar-Rich Moisture ,50 gram",
    src: "../products/baby/baby-dove.jpg",
    des: "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes",
    cost: 30,
    qty: 0,
  },
  {
    title: "Johnson's Active Kids Shampoo-Shiny Drops with Argan Oil,100 ml",
    src: "../products/baby/shampoo.jpg",
    des: "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes",
    cost: 95,
    qty: 0,
  },
  {
    title: "Baby Wipes- Cherry Blossom , 2 x 80 Pcs",
    src: "../products/baby/red-wipes.jpg",
    des: "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes",
    cost: 300,
    qty: 0,
  },
];

buildItems();
displayCart();
displayCrtBox();
displayTotal();
fruitsprod();
 displayBakery();
displayBeauty();
displayBeverage();
displayBaby();

//items in cart.html
function buildItems() {
  let productContainer = document.querySelector(".cartDisplay");
  let cartItems = true;
  if (cartItems && productContainer) {
    console.log("buildItems");
    productContainer.innerHTML = "";

    Object.values(items).map((item) => {
      console.log(item);
      productContainer.innerHTML += `
         <div class="item">
           <h3 class="title-card"> ${item.title}</h3>
           <img src=${item.src} class="img-fluid"/>
             <div>
                <div id="des">
                <span class="bb">${item.des}</span>
                </div>
                <br> 
                <span id="cost">MRP Rs:  ${item.cost} </span>
                <a href="#" class="addcart  button-61">Buy Now</a>
              </div>
          </div>`;
    });
  }
}

var addcart = document.querySelectorAll(".addcart");

//looping all the products and to make it clickble
for (let i = 0; i < addcart.length; i++) {
  addcart[i].addEventListener("click", (e) => {
    e.preventDefault();
    itemsAdded(items[i]);
    totalCost(items[i]);
  });
}

//adding items to cart logo
function itemsAdded(product) {
  // console.log(product);

  let productNumbers = localStorage.getItem("itemNumber");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("itemNumber", productNumbers + 1);
    document.querySelector("#item").innerText =
      productNumbers + 1 + " " + "Items";
  } else {
    localStorage.setItem("itemNumber", 1);
    document.querySelector("#item").innerText = 1 + " " + "Item";
  }
  console.log(productNumbers);
  
  setItems(product);
}

//selected Items into the cart
function setItems(product) {
  let cartItems = localStorage.getItem("productsIncart");
  cartItems = JSON.parse(cartItems);

  //selected at first and later
  if (cartItems != null) {
    if (cartItems[product.title] == undefined) {
      cartItems = { ...cartItems, [product.title]: product };
    }
    cartItems[product.title].qty += 1;
  } else {
    product.qty = 1;
    cartItems = { [product.title]: product };
  }

  console.log("new", cartItems);

  localStorage.setItem("productsIncart", JSON.stringify(cartItems));
}


//total cost pof selectd product
function totalCost(product) {
  console.log(product.cost);

  let totalCartCost = localStorage.getItem("totalcost");

  if (totalCartCost != null) {
    totalCartCost = parseInt(totalCartCost);
    localStorage.setItem("totalcost", totalCartCost + product.cost);
  } else {
    localStorage.setItem("totalcost", product.cost);
  }
}


//items selected display
function displayCart() {
  let cartItems = localStorage.getItem("productsIncart");
  cartItems = JSON.parse(cartItems);
  console.log(cartItems);

  let productContainer = document.querySelector(".Itemas-Container");
  if (cartItems && productContainer) {
    console.log("Im there");
    productContainer.innerHTML = "";

    Object.values(cartItems).map((item) => {
      let subtotal = item.qty * item.cost;
      console.log(subtotal);
      productContainer.innerHTML += ` <div class="Cart-Items">
        <div class="image-box">
        <img src=${item.src} />
      </div>
      <div  class="display">
        <h2 class-"title">${item.title}</h2>
        <div class="counter">
          <div class="btn">+</div>
          <div class="count">${item.qty}</div>
          <div class="btn">-</div>
          <div class="count">X</div>
          <div class="count">Rs.${item.cost}/-</div>
          <div class="amount">Rs.${subtotal}/-</div>
        </div>
      </div>
    </div>
    `;
    });
  }
}


//navbar cart total items
function displayCrtBox() {
  let cartTotalItems = localStorage.getItem("itemNumber");
  cartTotalItems = JSON.parse(cartTotalItems);
  console.log(cartTotalItems);

  let productContainer = document.querySelector(".nav-cart-text");
  if (cartTotalItems && productContainer) {
    console.log("Im there");
    productContainer.innerHTML = `${cartTotalItems}  Items`;
  }
}


//overall Total
function displayTotal() {
  let overAllTotal = localStorage.getItem("totalcost");
  overAllTotal = JSON.parse(overAllTotal);
  console.log(overAllTotal);

  let productContainer = document.querySelector(".cart-bottom");
  if (overAllTotal && productContainer) {
    console.log("Im there");
    productContainer.innerHTML = `
        <div class="foot">
        <h4>Promo code can be applied on payment page</h4>
           <div class="inner-foot">
            <span style="float:left; margin-left:5px">Proceed To CheckOut</span>
            <span style="float:right; margin-right:5px"">${overAllTotal} ></span>
           </div>
        </div>`;
  }
}

//display fruits
function fruitsprod() {
  let productContainer = document.querySelector(".fruitDisplay");

  var fruits = items.slice(0, 5);
  console.log(fruits);
  if (productContainer) {
    console.log("buildItems");
    productContainer.innerHTML = "";

    Object.values(fruits).map((item) => {
      console.log(fruits);
      productContainer.innerHTML += `
         <div class="item">
         <h3 class="title-card"> ${item.title}</h3>
         <img src=${item.src} class="img-fluid"/>
           <div>
                <div id="des">
                <span class="bb">${item.des}</span>
                </div>
                <br> 
                <span id="cost">MRP Rs.${item.cost} </span>
                <a href="#" class="addcart  button-61">BUY NOW</a>
                </div>
                </div>`;
    });
  }
}

//display bakery
function displayBakery() {
    let productContainer = document.querySelector(".bakeryCart");
    
    var bakery = items.slice(5, 9);
    
    if (productContainer) {
      console.log("buildItems");
      productContainer.innerHTML = "";
  
      Object.values(bakery).map((item) => {
        console.log(bakery);
        productContainer.innerHTML += `
           <div class="item">
           <h3 class="title-card"> ${item.title}</h3>
           <img src=${item.src} class="img-fluid"/>
             <div>
                  <div id="des">
                  <span class="bb">${item.des}</span>
                  </div>
                  <br> 
                  <span id="cost">MRP Rs.${item.cost} </span>
                  <a href="#" class="addcart  button-61">BUY NOW</a>
                  </div>
                  </div>`;
      });
    }
  }


  //display beauty
function displayBeauty() {
    let productContainer = document.querySelector(".beautyCart");

    var beauty = items.slice(13, 18);
    
    if (productContainer) {
      console.log("buildItems");
      productContainer.innerHTML = "";
  
      Object.values(beauty).map((item) => {
        console.log(beauty);
        productContainer.innerHTML += `
           <div class="item">
           <h3 class="title-card"> ${item.title}</h3>
           <img src=${item.src} class="img-fluid"/>
             <div>
                  <div id="des">
                  <span class="bb">${item.des}</span>
                  </div>
                  <br> 
                  <span id="cost">MRP Rs.${item.cost} </span>
                  <a href="#" class="addcart  button-61">BUY NOW</a>
                  </div>
                  </div>`;
      });
    }
  }


   //display beverage
function displayBeverage() {
    let productContainer = document.querySelector(".beverageCart");
 
    var beverage = items.slice(9, 13);
    
    if (productContainer) {
      console.log("buildItems");
      productContainer.innerHTML = "";
  
      Object.values(beverage).map((item) => {
        console.log(beverage);
        productContainer.innerHTML += `
           <div class="item">
           <h3 class="title-card"> ${item.title}</h3>
           <img src=${item.src} class="img-fluid"/>
             <div>
                  <div id="des">
                  <span class="bb">${item.des}</span>
                  </div>
                  <br> 
                  <span id="cost">MRP Rs.${item.cost} </span>
                  <a href="#" class="addcart  button-61">BUY NOW</a>
                  </div>
                  </div>`;
      });
    }
  }


    //display baby
function displayBaby() {
    let productContainer = document.querySelector(".babycart");

    var baby = items.slice(18, 26);
    
    if (productContainer) {
      console.log("buildItems");
      productContainer.innerHTML = "";
  
      Object.values(baby).map((item) => {
        console.log(baby);
        productContainer.innerHTML += `
           <div class="item">
           <h3 class="title-card"> ${item.title}</h3>
           <img src=${item.src} class="img-fluid"/>
             <div>
                  <div id="des">
                  <span class="bb">${item.des}</span>
                  </div>
                  <br> 
                  <span id="cost">MRP Rs.${item.cost} </span>
                  <a href="#" class="addcart  button-61">BUY NOW</a>
                  </div>
                  </div>`;
      });
    }
  }
