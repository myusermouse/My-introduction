const darkImg = document.querySelector('.dark-img');
const lightImg = document.querySelector('.light-img');
const body = document.querySelector('.body');

darkImg.addEventListener('click', ()=>{
    body.classList.add("dark-mode");
    darkImg.classList.add('pp');
    lightImg.classList.remove('pp');
});

lightImg.addEventListener('click', ()=>{
    body.classList.remove('dark-mode');
    darkImg.classList.remove('pp');
    lightImg.classList.add('pp');
});

const contactClick = document.querySelector('.contact-click');
const contactInfo = document.querySelector('.contact');

contactClick.addEventListener('click', ()=>{
    contactInfo.classList.toggle('pp');
});

const btn = document.querySelector('.btn');
