const car = JSON.parse(localStorage.getItem("selectedCar"));
const container = document.getElementById("aboutContainer");

if (!car) {
  container.innerHTML = "<p style='color:white'>No car selected.</p>";
} else {
  container.innerHTML = `
    <div class="about-card">
      <div class="about-image">
        <img src="${car.image}" alt="${car.brand}">
      </div>

      <div class="about-info">
        <h1>${car.brand} ${car.model}</h1>

        <p class="about-price">
          Price Range: ₹${car.price}
        </p>

        <p class="about-desc">
          The ${car.brand} ${car.model} is designed for premium comfort,
          smooth city driving, and powerful highway performance.
          It delivers a balanced mix of luxury, safety, and modern technology.
        </p>

        <h3>Key Features</h3>
        <ul class="feature-list">
          <li>Luxury interior with premium finish</li>
          <li>Advanced safety & driver assistance</li>
          <li>High performance engine</li>
          <li>Smart infotainment system</li>
          <li>Multiple driving modes</li>
        </ul>
      </div>
    </div>
  `;
}
