"use strict"

const listPlyers = document.querySelector('.js__button');
const closeBtn = document.querySelector('.btn-cancel');
const numTeam1 = document.getElementById('num1');

numTeam1.addEventListener("click", function (e) {
	e.preventDefault();
	listPlyers.classList.add('active');
});
