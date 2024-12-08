document.querySelector('.generate-btn').addEventListener('click', function () {
    const wishes = [
        "Happy Birthday, ❤️Dr. Swathi! 🎉",
        "To the caring and inspiring ❤️Dr. Swathi, Happy Birthday!",
        "May your day be as bright as the lives you heal, ❤️ Dr. Swathi!",
        "Wishing you happiness and smiles, ❤️ Dr. Swathi!",
        "Happy Birthday, ❤️Dr. Swathi! Thank you for making the world better!",
        "Celebrating another wonderful year of ❤️Dr. Swathi's compassion and care!"
    ];

    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    displayWish(randomWish);
});

function displayWish(text) {
    const wishTextElement = document.querySelector('.wish-text');
    wishTextElement.textContent = text;
}
