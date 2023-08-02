const box = document.querySelectorAll('.box');
const search = document.querySelector('.search');
const comedybtn = document.querySelector('.comedybtn');
const romanticbtn = document.querySelector('.romanticbtn');
const Actionbtn = document.querySelector('.Actionbtn');
const ratingbtn = document.querySelector('.ratingbtn');
const removebtn = document.querySelector('.removebtn');

search.addEventListener('keyup', function (event) {
    const word = event.target.value.toLowerCase();
    
    box.forEach(item => {
        item.querySelector('h2').textContent.toLowerCase().includes(word) ||
        item.querySelector('.genre').textContent.toLowerCase().includes(word)?
        (item.style.display = 'block') : (item.style.display = 'none');
    })
})

comedybtn.addEventListener('click', ()=> {
    box.forEach(item => {
        item.querySelector('.genre').textContent.includes('комедия')?
        (item.style.display = 'block') : (item.style.display = 'none');
    })
})

romanticbtn.addEventListener('click', ()=> {
    box.forEach(item => {
        item.querySelector('.genre').textContent.includes('мелодрама')?
        (item.style.display = 'block') : (item.style.display = 'none');
    })
})

Actionbtn.addEventListener('click', ()=> {
    box.forEach(item =>{
        item.querySelector('.genre').textContent.includes('боевик')?
        (item.style.display = 'block') : (item.style.display = 'none');
    })
})

ratingbtn.addEventListener('click', () => {

    box.forEach (item => {
    item.querySelector('.number').textContent.startsWith('7') ||
    item.querySelector('.number').textContent.startsWith('8') ||
    item.querySelector('.number').textContent.startsWith('9')?
    (item.style.display = 'block') : (item.style.display = 'none');
        
    })
})

removebtn.addEventListener ('click', ()=> {
    box.forEach(item => {
        item.style.display = 'block';
    })
})

gsap.timeline()
.to('h1',{
    text: 'Кинотека',
    duration:2
})
gsap.from('.comedybtn', {width:0, opacity:0, duration:1})
gsap.from('.romanticbtn', {width:0, opacity:0, duration:1})
gsap.from('.Actionbtn', {width:0, opacity:0, duration:1})
gsap.from('.ratingbtn', {width:0, opacity:0, duration:1})
gsap.from('.removebtn', {width:0, opacity:0, duration:1})