function showMessage() {
    alert("Thank you for visiting NT Digital Marketing!");
}

document.getElementById("contactForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name === "" || email === ""){
        document.getElementById("response").innerHTML =
        "Please fill all fields.";
        return;
    }

    document.getElementById("response").innerHTML =
    "Thank you " + name + "! We will contact you soon.";

    document.getElementById("contactForm").reset();
});