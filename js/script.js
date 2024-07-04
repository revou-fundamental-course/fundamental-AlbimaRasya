// Input nama user ke web
let displayName = prompt('Ini siapa yh?','');
document.getElementById("displayname").innerHTML= displayName;
console.log("displayName")

function replaceName() {
    let displayName = prompt("Kamu mau dipanggil apa?", "");
    document.getElementById("displayname").innerHTML = displayName;
}


// Fungsi Banner AutoSlide
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Fungsi Output Input Form Message
function setSenderUI(name, birthDate, gender, message) {
    document.getElementById("sender-name").innerHTML = name;
    document.getElementById("sender-birthdate").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = message;
}

function validateForm() {
    const name = document.forms["message-form"]["name"].value;
    const birthDate = document.forms["message-form"]["birthdate"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const message = document.forms["message-form"]["message"].value;

    if (name != "" && birthDate != "" && gender != "" && message != "") {
        alert("Form terkirim");
        setSenderUI(name, birthDate, gender, message);
        return false
    }
    else {
        alert("Tidak boleh kosong!");
        return false;
    }
}

console.log("Hello world");