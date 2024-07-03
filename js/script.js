let displayName = prompt('Ini siapa yh?','');
document.getElementById('displayName').innerHTML=displayName;

function setSenderUI(name, birthDate, gender, message) {
    document.getElementById("sender-name").innerHTML = name;
    document.getElementById("sender-birthDate").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = message;
}

function validateForm() {
    const name = document.forms["message-form"]["name"].value;
    const birthDate = document.forms["message-form"]["birthDate"].value;
    const gender = document.forms["message-form"]["jenisKelamin"].value;
    const message = document.forms["message-form"]["message"].value;

    if (name == "" || birthDate == "" || gender == "" || message == "") {
        alert("Tidak boleh kosong!");
        return false;
    }
    setSenderUI(name, birthDate, gender, message);
    return false;
}
console.log("Hello world");