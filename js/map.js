 // Initialize and add the map
function initMap() {
// The location of Uluru
const uluru = { lat: 53.7211748, lng: 91.4424513 };
// The map, centered at Uluru
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 17.28,
  center: uluru,
});
// The marker, positioned at Uluru
// const icon = '../img/Ti_24.jpg';
const marker = new google.maps.Marker({
  position: uluru,
  map: map,
  animation: google.maps.Animation.BOUNCE,
});
}