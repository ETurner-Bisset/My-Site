// random color button
const myBtn = document.getElementById('myBtn');
const chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

myBtn.addEventListener('click', randomColor);

function randomColor() {
    let bgColor = "#";
    for (let i = 0; i < 6; i++) {
        bgColor += chars[getRandomNumber()];
    };
    document.body.style.backgroundColor = bgColor;
};

function getRandomNumber() {
    return Math.floor(Math.random() * chars.length);
};