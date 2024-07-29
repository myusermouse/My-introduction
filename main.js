//background light chenge

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


/// dawnload pdf file cv 
const btn = document.querySelector('.btn'); //button

btn.addEventListener('click',()=>{
    let pdfUrl = "/pdf file/my pdf.pdf" //pdf url
    
    let link = document.createElement('a'); // create new tag 
    
    link.href = pdfUrl;
    link.download = 'mycv.pdf';
    
    link.click();
    
})

///  lovely // i love coding! 

// contact show 

const contactMe = document.getElementById('contact-me');
const contactContant = document.getElementById('contact-contant');

const closecontant = document.getElementById('c-b');
contactMe.addEventListener('click', ()=>{
    contactContant.classList.toggle('contact-contant-show');
})
 function closeContant() {
     contactContant.classList.remove('contact-contant-show');
 }
///// close contact show/// 
