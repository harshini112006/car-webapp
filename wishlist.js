const container = document.getElementById("wishlistContainer");
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

if (wishlist.length === 0) {
  container.innerHTML = "<p>No cars saved yet.</p>";
}

wishlist.forEach((car, index) => {
  const div = document.createElement("div");
  div.className = "car-card";

  div.innerHTML = `
    <div class="car-image-box">
      <img src="${car.image}">
    </div>
    <h3>${car.brand} ${car.model}</h3>
    <p>₹${car.price}</p>
    <button onclick="removeCar(${index})">Remove</button>
  `;

  container.appendChild(div);
});

function removeCar(index) {
  wishlist.splice(index, 1);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  location.reload();
}
div.innerHTML = `
  <img src="https://source.unsplash.com/featured/?${car.brand}+${car.model}+car"
       onerror="this.src='https://via.placeholder.com/400x250?text=Car'">

  <h3>${car.brand} ${car.model}</h3>
  <p>₹${car.price}</p>

  <button onclick="removeCar(${index})">Remove</button>
`;
