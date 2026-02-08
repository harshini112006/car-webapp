/* ===========================
   CAR DATA (BASIC IMAGES)
   =========================== */

const cars = [
  {
    id: 1,
    brand: "BMW",
    model: "X5",
    price: "85,00,000",
    colors: ["Black", "White", "Blue"],
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068"
  },
  {
    id: 2,
    brand: "mercedes benz",
    model: "A6",
    price: "72,00,000",
    colors: ["Black", "Grey", "Red"],
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
  },
  {
    id: 3,
    brand: "skoda",
    model: "octavia RS",
    price: "49,00,000",
    colors: ["White", "Black", "Silver"],
    image: "https://i.ndtvimg.com/i/2018-03/skoda-octavia-vrs-challenge-edition_827x510_41520436057.jpg"
  },
{
  id: 4,
  brand: "Ford",
  model: "GT",
  price: "1,50,00,000",
  colors: ["White", "Black", "Silver"],
  image: "https://images.autox.com/uploads/2017/01/Ford-Mustang_GT-2018-1600-03-500x261.jpg"
},
{
  id: 5,
  brand: "Audi",
  model: "Q7",
  price: "1,18,00,000",
  colors: ["Red", "White", "Blue"],
  image: "https://kai-and-karo.ams3.cdn.digitaloceanspaces.com/media/vehicles/images/IMG-20240208-WA0034.jpg"
},
{
  id: 6,
  brand: "jaguar",
  model: "F-PACE",
  price: "20,00,000",
  colors: ["Black", "Orange", "White"],
  image: "https://blogs.gomechanic.com/wp-content/uploads/2025/06/Insider-Good-Reason-to-Choose-the-Most-Expensive-Jaguar-Car-F-Type.jpg"
},
{
  id: 7,
  brand: "Porsche",
  model: "cayenne",
  price: "2,26,00,000",
  colors: ["Blue", "White", "Black"],
  image: "https://www.motorbeam.com/wp-content/uploads/Porsche-Cayenne-Electric-672x414.jpg"
}
];

/* ===========================
   RENDER CARS (EXPLORE)
   =========================== */

function renderCars(list = cars) {
  const container = document.getElementById("carContainer");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(car => {
    const card = document.createElement("div");
    card.className = "car-card";

    card.innerHTML = `
      <div class="car-image-box">
        <img src="${car.image}" alt="${car.brand}">
      </div>

      <div class="car-info">
        <h3>${car.brand} ${car.model}</h3>
        <p class="price">₹${car.price}</p>

        <button class="view-btn" onclick='viewCar(${JSON.stringify(car)})'>
          View Details
        </button>

        <button class="wish-btn" onclick='addToWishlist(${JSON.stringify(car)})'>
          ❤️ Wishlist
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

/* ===========================
   SEARCH FEATURE
   =========================== */

function searchCars() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  const filtered = cars.filter(car =>
    car.brand.toLowerCase().includes(query) ||
    car.model.toLowerCase().includes(query)
  );

  renderCars(filtered);
}

/* ===========================
   WISHLIST
   =========================== */

function addToWishlist(car) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const exists = wishlist.some(item => item.id === car.id);
  if (!exists) {
    wishlist.push(car);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Added to Wishlist ❤️");
  } else {
    alert("Already in Wishlist");
  }
}

function loadWishlist() {
  const container = document.getElementById("wishlistContainer");
  if (!container) return;

  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  container.innerHTML = "";

  if (wishlist.length === 0) {
    container.innerHTML = "<p>No cars in wishlist.</p>";
    return;
  }

  wishlist.forEach(car => {
    const card = document.createElement("div");
    card.className = "car-card";

    card.innerHTML = `
  <div class="car-image-box">
    <img src="${car.image}" alt="${car.brand}">
  </div>

  <h3>${car.brand} ${car.model}</h3>
  <p>₹${car.price}</p>

  <button class="view-btn" onclick='viewCar(${JSON.stringify(car)})'>
    View Details
  </button>
`;
    container.appendChild(card);
  });
}

/* ===========================
   VIEW DETAILS → ABOUT PAGE
   =========================== */

function viewCar(car) {
  localStorage.setItem("selectedCar", JSON.stringify(car));
  window.location.href = "about.html";
}

/* ===========================
   AUTO LOAD
   =========================== */

document.addEventListener("DOMContentLoaded", () => {
  renderCars();
  loadWishlist();
});
function viewCar(car) {
  localStorage.setItem("selectedCar", JSON.stringify(car));
  window.location.href = "about.html";
}
