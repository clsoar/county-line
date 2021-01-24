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
