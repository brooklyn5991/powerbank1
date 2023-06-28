
// let yourName = prompt("This is Brooklyn's website, please What is your name");
// let ba = yourName.slice(0,1);
// let za = yourName.slice(1,yourName.length);
// let na = za.toLowerCase();
// let ma = ba.toUpperCase();
// let volv = ma + na


// document.getElementById("qstn").innerHTML = ("Hello "  + volv + ", You are welcome" + "!");


// bettery charging
function chargebattery() {
var a;
a = document.getElementById("b3");
a.innerHTML = "&#xf244;";
setTimeout(function () {
  a.innerHTML = "&#xf243;";
}, 1000);
setTimeout(function () {
  a.innerHTML = "&#xf242;";
}, 2000);
setTimeout(function () {
  a.innerHTML = "&#xf241;";
}, 3000);
setTimeout(function () {
  a.innerHTML = "&#xf240;";
}, 4000);
}
chargebattery();
setInterval(chargebattery, 5000);


// //products preview
// let previewContainer = document.querySelector(".products-preview");
// let previewBox = previewContainer.querySelectorAll(".preview");

// document.querySelectorAll('.products-container .product').forEach(product =>{
//   product.onclick = () => {
//     previewContainer.style.display = 'flex';
//     let name = product.getAttribute('data-name');
//     previewBox.forEach(preview =>{
//       preview.getAttribute('data-target');
//       if (name == target){
//         preview.classList.add('active')
//       }
 
//     });
//   };
// });


// previewBox.forEach(close => {
//   close.querySelector('.fa-times').onclick = () =>{
//     close.classList.remove('active');
//     previewContainer.style.display = 'none';

//   };
// });


let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});























