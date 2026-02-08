const car = JSON.parse(localStorage.getItem("selectedCar"));

if (car) {
  document.getElementById("carImage").src = car.image;
  document.getElementById("carTitle").textContent = `${car.brand} ${car.model}`;
  document.getElementById("carPrice").textContent = `Price: $${car.price}`;
  document.getElementById("carColors").textContent = `Colors: ${car.colors.join(", ")}`;
  document.getElementById("carShowroom").textContent = `Showroom: ${car.showroom}`;
  document.getElementById("mapLink").href =
    `https://www.google.com/maps/search/${car.showroom}`;
}
