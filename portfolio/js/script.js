
window.onload = function() {
    console.log("Aurora System Online ");
};


document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        window.location = this.href;
    });
});

function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;

    if(name === "" || email === "") {
        alert("⚠ Fields cannot be empty.");
        return false;
    }

    alert("Message transmitted successfully! 🌌");
    return true;
}
