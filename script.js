// Search Input Js
let searchInput = document.getElementById('searchInput');
let iconItems = document.getElementsByClassName('icon-item')

searchInput.onfocus = function () {
	for(let item of iconItems){
		item.style.display = 'none';
	}
	this.style.width = '100%'
}

searchInput.onblur = function () {
	for(let item of iconItems){
		item.style.display = 'block';
	}
	this.style.width = '80px'
}

// Nav Bg Js
let nav = document.getElementById('nav');

window.onscroll = function() {
	if(window.pageYOffset > 485){
		nav.classList.add('bg');
	}else{
		nav.classList.remove('bg');	
	}
}


// Hamburger Js
let hamburger = document.getElementById('bar');
let navbarMenu = document.getElementById('navbar-menu')

hamburger.onclick = function() {
	navbarMenu.classList.toggle('active');

	if (this.innerHTML == '<i class="fa-solid fa-bars"></i>') {
		this.innerHTML = '<i class="fa-solid fa-times"></i>'
	}else{
		this.innerHTML = '<i class="fa-solid fa-bars"></i>'	
	}
}

// Slider Js

let nextBtn = document.getElementById('next_btn');
let prevBtn = document.getElementById('prev_btn')
let sliders = document.getElementsByClassName('slider')
let sliderNum = 1;

function next(){
	// document.getElementById('slider1').style.display = 'none';
	// document.getElementById('slider2').style.display = 'block';

	document.getElementById('slider' + sliderNum).classList.remove('active');
	sliderNum ++;

	if (sliderNum > sliders.length) {
		sliderNum = 1;
	}

	document.getElementById('slider' + sliderNum).classList.add('active');
}

function prev(){
	document.getElementById('slider' + sliderNum).classList.remove('active');
	sliderNum --;

	if (sliderNum < 1 ) {
		sliderNum = sliders.length;
	}

	document.getElementById('slider' + sliderNum).classList.add('active');
}

nextBtn.onclick = next; 
prevBtn.onclick = prev;

setInterval(next, 3000);

// Popular Products

let all = document.getElementById('all_btn');
let cloth = document.getElementById('cloth_btn');
let sniker = document.getElementById('sniker_btn');
let watch = document.getElementById('watch_btn');

let cloth_cards = document.getElementsByClassName('cloth');
let sniker_cards = document.getElementsByClassName('shoe');
let watch_cards = document.getElementsByClassName('watch');

all.onclick = function(){
	for(let cloth_card of cloth_cards){
		cloth_card.style.display = 'block';
	}
	for(let sniker_card of sniker_cards){
		sniker_card.style.display = 'block';
	}
	for(let watch_card of watch_cards){
		watch_card.style.display = 'block';
	}

	this.classList.add('active')
	cloth.classList.remove('active');
	sniker.classList.remove('active');
	watch.classList.remove('active');
} 
	
cloth.onclick = function(){
	for(let cloth_card of cloth_cards){
		cloth_card.style.display = 'block';
	}
	for(let sniker_card of sniker_cards){
		sniker_card.style.display = 'none';
	}
	for(let watch_card of watch_cards){
		watch_card.style.display = 'none';
	}

	this.classList.add('active')
	all.classList.remove('active');
	sniker.classList.remove('active');
	watch.classList.remove('active');
} 

sniker.onclick = function(){
	for(let cloth_card of cloth_cards){
		cloth_card.style.display = 'none';
	}
	for(let sniker_card of sniker_cards){
		sniker_card.style.display = 'block';
	}
	for(let watch_card of watch_cards){
		watch_card.style.display = 'none';
	}

	this.classList.add('active')
	cloth.classList.remove('active');
	all.classList.remove('active');
	watch.classList.remove('active');
} 

watch.onclick = function(){
	for(let cloth_card of cloth_cards){
		cloth_card.style.display = 'none';
	}
	for(let sniker_card of sniker_cards){
		sniker_card.style.display = 'none';
	}
	for(let watch_card of watch_cards){
		watch_card.style.display = 'block';
	}

	this.classList.add('active')
	cloth.classList.remove('active');
	sniker.classList.remove('active');
	all.classList.remove('active');
} 

