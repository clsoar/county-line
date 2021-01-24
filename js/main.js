//https://script.google.com/macros/s/AKfycbwRSCpXWL9Id8ihsyBDU5xQQQAVmAW9pZ5G-gy-8iXYsiOXh2hV/exec
const scriptURL = 'https://script.google.com/macros/s/AKfycbwRSCpXWL9Id8ihsyBDU5xQQQAVmAW9pZ5G-gy-8iXYsiOXh2hV/exec';
const form = document.forms['clientForm'];
const formSubmitBtn = document.querySelector("#submit-form");

//bad dude protection
const extra = document.querySelector("#last-name");
const extra2 = document.querySelector("#name");
const extra3 = document.querySelector("#password");


if(formSubmitBtn) {

  //hide honeypot
  extra.style.display = "none";
  extra2.setAttribute('tabindex', "-1");

  if(!extra.value && !extra3.value){
    form.addEventListener('submit', e => {
      if(!extra.value && extra2.value === "Enter Roboname" && !extra3.value){
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            console.log('Success!', response);
            window.location.href = "thank-you.html";
          })
          .catch(error => console.error('Error!', error.message));
      //clears form and goes to thank you page

        form.reset();
        return false;
            }
        })


    }
  }
//for dialog
const closeBtn = document.querySelector('#close-button');
const newLat = document.querySelector('#lat');
const newLong = document.querySelector('#long');
const transferLocation = () => {
  //transfer lat longs to form
    let thisLat = document.querySelector('#testLat').value;
    let thisLong = document.querySelector('#testLong').value;
    newLat.value = thisLat;
    newLong.value = thisLong;

  console.log('this might work');
//  newLat.value = lat;
//  newLong.value = long;
};
//for map
const yeksOne = "AIzaSyCnWKdGq2iKrYT";
const yeksTwo = "atd3QqciKceSiyKpU294";

//script element create
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + yeksOne + yeksTwo+ '&libraries=geometry,places' + '&callback=initMap';
script.defer = true;
//get lat long from Address
let stAdd = document.querySelector('#st-address').value;
let city = document.querySelector('#city').value;
let state = document.querySelector('#state').value;
let zip = document.querySelector('#zip').value;
let address = (stAdd + ' ' + city + ', ' + state + ' ' + zip);

//attach callback function to window
window.initMap = function() {
  // JS API is loaded and available
  let geocoder = new google.maps.Geocoder();
  geocoder.geocode ({
    'address': address},
    function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        let latLngs = results[0].geometry.location;
        let LL = latlngs.toString();
        let tst = LL.substring(1, LL.length - 1);
        let coordinates = tst.split(',');
        var latForMap = coordinates[0];
        var longForMap = coordinates[1];
        return (latForMap, longForMap);
      }
      return (latForMap, longForMap);

    });

  let map = (latForMap, longForMap) => {new google.maps.Map(document.getElementById('map'), {
    center: {lat: latForMap, lng: longForMap},
    zoom: 10
  });
};
}
// Append the 'script' element to 'head'
document.head.appendChild(script);
