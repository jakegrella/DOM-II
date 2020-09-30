const nav = document.querySelector('.main-navigation');
const logo = document.querySelector('.logo-heading');
const navLinks = document.querySelectorAll('.nav-link');
const imgs = document.querySelectorAll('img');
const footer = document.querySelector('.footer');
const h2s = document.querySelectorAll('h2');
const ps = document.querySelectorAll('p');
const btns = document.querySelectorAll('.btn');

// (mouseover) hovering over nav links turns them red
navLinks.forEach((elem) => {
	elem.addEventListener('mouseover', (event) => {
		elem.style.color = 'red';
	});
});

// (click) click on logo increases size
logo.addEventListener('click', (event) => {
	logo.style = 'font-size: 8rem';
});

// not working
// (wheel) using mouse scroll wheel on img changes size
// imgs.forEach((elem) => {
// 	elem.addEventListener('wheel', (event) => {
// 		console.log('jh');
// 		console.log(event);
// 	});
// });

// (load) when page loads, there is an alert
// window.addEventListener('load', (event) => {
// 	alert('Page has loaded!');
// });

//doesn't work
// (focus) focus on nav links when page loads
// window.onload.navLinks.forEach((elem) => {
// 	elem.addEventListener('focus', (event) => {
// 		event.target.style.border = 'red';
// 	});
// });

// (resize) when window resizes, change color of logo
function logoFontColor() {
	logo.style = 'color: green';
}
window.addEventListener('resize', logoFontColor);

// (scroll) on scroll, change color of h2 randomly
h2s.forEach((elem) => {
	window.addEventListener('scroll', (event) => {
		elem.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	});
});

// doesn't work
// (select)
// function colorSelection(event) {
//     console.log(event)
//     ps.style.color = 'red'
// }
// window.addEventListener('select', colorSelection)

// (dblclick) double click on logo decreases size
logo.addEventListener('dblclick', (event) => {
	logo.style = 'font-size: 2rem';
});

// (keyup) when spacebar is released, bottom buttons turn change to a random color
document.addEventListener('keyup', function (event) {
	if (event.key === ' ') {
		btns.forEach((elem) => {
			elem.style.backgroundColor = `#${Math.floor(
				Math.random() * 16777215
			).toString(16)}`;
		});
	}
});

// (auxclick) when right click or mouse wheel is clicked text turns red

// document.addEventListener('auxclick')

// (keydown) pressing escape key cancels all changes
document.addEventListener('keydown', function (event) {
	if (event.key === 'Escape') {
		navLinks.forEach((elem) => {
			elem.style.color = '#212529';
		});
		btns.forEach((elem) => {
			elem.style.backgroundColor = '#17A2B8';
        });
        h2s.forEach((elem) => {
			elem.style.color = '#000000';
		});
	}
	logo.style = 'font-size: 4rem; color: #000000';
});
