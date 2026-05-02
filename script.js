function welcomeMessage() {
    alert("Welcome to my website! Here you can find all of my achievements in Genshin Impact, Marvel Rivals, and Minecraft. Feel free to explore and check out my character builds, MVP screens, and Minecraft builds. Enjoy your stay!");
}

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting the form.");
        return false;
    }

    alert("Thank you for your message! We will get back to you soon.");
    return true;
}

let images = [
    "Genshin Title Image.avif", 
    "Rivals Tile.webp", 
    "Minecraft.jpg"
];

let i = 0;

function changeImage() {
    document.getElementById("slideshow").src = images[i];
    i = (i + 1) % images.length;
}

setInterval(changeImage, 3000); // Change image every 3 seconds
