// navbar
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    links.classList.toggle("show-links");
});



// date
const span = document.querySelector('.date');
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

formatDate();

function formatDate() {
    const month = new Date().getMonth();
    const date = new Date().getDate();
    const year = new Date().getFullYear();

    span.innerText = ` ${months[month]} ${date}, ${year}`;

};


