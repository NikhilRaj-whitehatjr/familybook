var images = [
    "family.jpg",
    "Avilala Thyagaraj.jpg",
    "Avilala Sirisha.jpg",
    "Avilala Nikhil Raj.jpg",
    "Avilala Chaitrika.jpg",
    "Mango.jpeg"
]

var names = [
    "My family",
    "Avilala Thyagaraj",
    "Avilala Sirisha",
    "Avilala Nikhil Raj",
    "Avilala Chaitrika",
    "Mango"
]

var x = 0

function nextslide() {
    document.getElementById("dd5").src = images[x]
    document.getElementById("names").innerHTML = names[x];
    x++; 

if (x == 6) 
  {
    x =0;                     
}
}
