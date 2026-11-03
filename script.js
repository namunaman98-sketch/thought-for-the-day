
const thoughts = [
    "Believe in yourself. Every day is a new beginning.",
    "Success begins with hard work.",
    "Never stop learning.",
    "Dream big and work hard.",
    "Your attitude determines your direction.",
    "Small steps lead to big achievements.",
    "Be the reason someone smiles today."
];

function newThought() {
    const randomIndex = Math.floor(Math.random() * thoughts.length);

    document.getElementById("thought").textContent =
        thoughts[randomIndex];
}

function copyThought() {
    const thought = document.getElementById("thought").textContent;

    navigator.clipboard.writeText(thought)
        .then(() => alert("Thought copied successfully!"))
        .catch(() => alert("Copy was not available. Please try again."));
}

function saveThought() {
    const thought = document.getElementById("thought").textContent;

    let favourites = JSON.parse(
        localStorage.getItem("favourites") || "[]"
    );

    if (!favourites.includes(thought)) {
        favourites.push(thought);
        localStorage.setItem("favourites", JSON.stringify(favourites));
        alert("Added to favourites! ❤️");
    } else {
        alert("This thought is already in your favourites!");
    }
}
