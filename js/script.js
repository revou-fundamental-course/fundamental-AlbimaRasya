// Input nama user ke web
let displayName = prompt('Ini siapa yh?','');
document.getElementById("displayname").innerHTML= displayName;
console.log("displayName")

// Fungsi Banner AutoSlide
// var slideIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("slide");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "block";
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }
// let slideIndex = 0;
// const slides = document.querySelectorAll('.slide');

// function showSlides() {
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1;
//     }
//     slides[slideIndex - 1].style.display = 'block';
//     setTimeout(showSlides, 5000); // Change image every 2 seconds
// }

// showSlides();

// Fungsi Output Input Form Message
function setSenderUI(name, birthDate, gender, message) {
    document.getElementById("sender-name").innerHTML = name;
    document.getElementById("sender-birthdate").innerHTML = birthdate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = message;
}

function validateForm() {
    const name = document.forms["message-form"]["name"].value;
    const birthDate = document.forms["message-form"]["birthdate"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const message = document.forms["message-form"]["message"].value;

    if (name != "" || birthDate != "" || gender != "" || message != "") {
        alert("Form terkirim");
        return false
    }
    else {
        alert("Tidak boleh kosong!");
        return false;
    }
    setSenderUI(name, birthDate, gender, message);
    return false;
}

console.log("Hello world");