const myslider = document.querySelectorAll('.myslider'),
	  D = document.querySelectorAll('.D');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslider.length;i++){
		myslider[i].style.display = "none";
	}
	for(i = 0;i<D.length;i++) {
		D[i].className = D[i].className.replace(' active', '');
	}
	if(n > myslider.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslider.length;
	   }
	myslider[counter - 1].style.display = "block";
	D[counter - 1].className += " active";
}


let img = document.querySelector('.img1');
let btn1 = document.querySelector('#btn1');

btn1.addEventListener('click' , () => {
    img.src = 'imges/card 1.jpeg';
})


let img1 = document.querySelector('.img1');
let btn11 = document.querySelector('#btn11');

btn11.addEventListener('click' , () => {
    img1.src = '/imges/pexels-rakicevic-nenad-744667.jpg';
})


let img2 = document.querySelector('.img2');
let btn2 = document.querySelector('#btn2');

btn2.addEventListener('click' , () => {
    img2.src = '/imges/card 2.jpeg';
})


let img22 = document.querySelector('.img2');
let btn22 = document.querySelector('#btn22');

btn22.addEventListener('click' , () => {
    img22.src = '/imges/pexels-sarah-trummer-955793.jpg';
})


let img3 = document.querySelector('.img3');
let btn3 = document.querySelector('#btn3');

btn3.addEventListener('click' , () => {
    img3.src = '/imges/card 3.jpeg';
})


let img33 = document.querySelector('.img3');
let btn33 = document.querySelector('#btn33');

btn33.addEventListener('click' , () => {
    img33.src = '/imges/pexels-isaac-pollock-3841778.jpg';
})


let img4 = document.querySelector('.img4');
let btn4 = document.querySelector('#btn4');

btn4.addEventListener('click' , () => {
    img4.src = '/imges/card 5.jpeg';
})


let img44 = document.querySelector('.img4');
let btn44 = document.querySelector('#btn44');

btn44.addEventListener('click' , () => {
    img44.src = '/imges/pexels-musa-ortaç-3540186 (1).jpg';
})


let img5 = document.querySelector('.img5');
let btn5 = document.querySelector('#btn5');

btn5.addEventListener('click' , () => {
    img5.src = '/imges/card 9.jpeg';
})


let img55 = document.querySelector('.img5');
let btn55 = document.querySelector('#btn55');

btn55.addEventListener('click' , () => {
    img55.src = '/imges/pexels-ash-cork-3080532.jpg';
})


let img6 = document.querySelector('.img6');
let btn6 = document.querySelector('#btn6');

btn6.addEventListener('click' , () => {
    img6.src = '/imges/card 10.jpeg';
})


let img66 = document.querySelector('.img6');
let btn66 = document.querySelector('#btn66');

btn66.addEventListener('click' , () => {
    img66.src = '/imges/pexels-divya-jain-8624624.jpg';
})