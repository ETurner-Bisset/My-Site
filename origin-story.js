const prev = document.getElementById('prevBtn');
const next = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.slide');

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

next.addEventListener('click', () => {
    counter++;
   carousel();
});

prev.addEventListener('click', () => {
    counter--;
    carousel();
});

function carousel() {
    slides.forEach((slide) => {
        if (counter < slides.length){
            slide.style.transform = `translateX(-${counter * 100}%)`;
        } 

        if (counter < 0) {
            slide.style.transform = `translateX(${counter * 100}%)`;
        }

        if (counter < slides.length - 1) {
            next.style.display = 'block';
        } else {
            next.style.display = 'none';
        }
    
        if (counter > 0) {
            prev.style.display = 'block';
        } else {
            prev.style.display = 'none';
        }
        
    });
};

