"use strict"

const listPlyers = document.querySelector('.js__button');
const closeBtn = document.querySelector('.btn-cancel');
const numTeam1 = document.getElementById('num1');

numTeam1.addEventListener("click", function (e) {
	e.preventDefault();
	listPlyers.classList.add('active');
});

const numTeam2 = document.getElementById('num2');
const numTeamActive2 = document.getElementById('num2JS');
numTeam2.addEventListener("click", function (e) {
	e.preventDefault();
	numTeamActive2.classList.add('active');
});
const numTeam3 = document.getElementById('num3');
numTeam3.addEventListener("click", function (e) {
	e.preventDefault();
	listPlyers.classList.add('active');
});

const numTeam4 = document.getElementById('num4');
numTeam4.addEventListener("click", function (e) {
	e.preventDefault();
	listPlyers.classList.add('active');
});
const numTeam5 = document.getElementById('num5');
numTeam5.addEventListener("click", function (e) {
	e.preventDefault();
	listPlyers.classList.add('active');
});
const numTeam6 = document.getElementById('num6');
numTeam6.addEventListener("click", function (e) {
	e.preventDefault();
	listPlyers.classList.add('active');
});

const numTeam7 = document.getElementById('num7');
numTeam7.addEventListener("click", function (e) {
	e.preventDefault();
	listPlyers.classList.add('active');
});
const numTeam8 = document.getElementById('num8');
numTeam8.addEventListener("click", function (e) {
	e.preventDefault();
	listPlyers.classList.add('active');
});
const numTeam9 = document.getElementById('num9');
numTeam9.addEventListener("click", function (e) {
	e.preventDefault();
	listPlyers.classList.add('active');
});

const numTeam10 = document.getElementById('num10');
numTeam10.addEventListener("click", function (e) {
	e.preventDefault();
	listPlyers.classList.add('active');
});

const numTeam11 = document.getElementById('num11');
numTeam11.addEventListener("click", function (e) {
	e.preventDefault();
	listPlyers.classList.add('active');
});
const numTeam12 = document.getElementById('num12');
numTeam12.addEventListener("click", function (e) {
	e.preventDefault();
	listPlyers.classList.add('active');
});

const numTeam13 = document.getElementById('num13');
numTeam13.addEventListener("click", function (e) {
	e.preventDefault();
	listPlyers.classList.add('active');
});
const numTeam14 = document.getElementById('num14');
numTeam14.addEventListener("click", function (e) {
	e.preventDefault();
	listPlyers.classList.add('active');
});
const numTeam15 = document.getElementById('num15');
numTeam15.addEventListener("click", function (e) {
	e.preventDefault();
	listPlyers.classList.add('active');
});

// При нажатии CLOSE закрывается форма
closeBtn.addEventListener('click', () => { //обработчик на Close
	listPlyers.classList.remove('active');
});












