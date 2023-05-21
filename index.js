
function myFunction(x) {
  if (x.matches) { // If media query matches
    pimage.setAttribute("src", "./images/image-product-mobile.jpg");
  }
  else {
    pimage.setAttribute("src", "./images/image-product-desktop.jpg");
  }
}

var x = window.matchMedia("(max-width: 600px)")

var pimage = document.querySelector(".perfume-img");

myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state c

