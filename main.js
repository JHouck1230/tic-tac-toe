'use strict';

var game = false;
var player = true; // player 1 is true; player 2 is false
var board = document.getElementById('board');
var players = [];
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
var animationIn = 'lightSpeedIn';
var animationOut = 'lightSpeedOut';
var playerTurn = document.getElementById('playerTurn');

document.addEventListener('DOMContentLoaded', init);

function init() {
	document.getElementById('submitName').addEventListener('click', submitNames);
	document.getElementById('newGame').addEventListener('click', newGame);
	board.addEventListener('click', chooseSquare);
	board.addEventListener('click', checkGame);
	board.addEventListener('click', animate);
}

function animate(event) {
	// if(playerTurn.classList.contains(animationIn)) {
		playerTurn.classList.add(animationIn).one(animationEnd, function() {
			playerTurn.classList.remove(animationIn);
		});
	// } else {
		playerTurn.classList.add(animationOut).one(animationEnd, function() {
			playerTurn.classList.remove(animationOut);
		});
	// }
}

function submitNames() {
	var name = document.getElementById('names').value;
	var inputLabel = document.getElementById('inputLabel');

	inputLabel.innerHTML = "Enter Player 1's Name";
	players.push(name);

	if(players.length === 1) {
		document.getElementById('names').value = '';
		inputLabel.innerHTML = "Enter Player 2's Name";
	}

	if(players.length === 2)	{
		document.getElementById('nameInput').setAttribute('style', 'display: none');
		game = true;
		document.getElementById('names').value = '';
		document.getElementById('playerTurn').innerHTML = `Turn:  ${players[0]}`;

	}
}

function newGame() {
	var square = document.getElementsByClassName('square');
	for(var i = 0; i < square.length; i++) {
		square[i].innerHTML = '';
		square[i].classList.remove('X', 'O', 'piece');
	}
	playerTurn.innerHTML = '';
	players = [];
	document.getElementById('nameInput').removeAttribute('style', 'display: none');
	document.getElementById('newGame').setAttribute('style', 'display: none');
}

function chooseSquare(event) {
	if(game) {
		var square = event.target;
		
		var piece;
		if(!square.classList.contains('piece')) {

			if(player) { // player 1
				square.innerHTML = 'X';
				square.classList.add('X', 'piece');
				player = false;
				playerTurn.innerHTML = `Turn:  ${players[1]}`;
			} else { // player 2
				square.innerHTML = 'O';
				square.classList.add('O', 'piece');
				player = true;
				playerTurn.innerHTML = `Turn:  ${players[0]}`;
			}
		}	
	}
}

function checkGame() {
	var square = document.getElementsByClassName('square');

	for(var i = 0; i < square.length; i++) {
		if(square[0].classList.contains('X') && square[1].classList.contains('X') && square[2].classList.contains('X') || square[1].classList.contains('O') && square[1].classList.contains('O') && square[2].classList.contains('O')){
			game = false;
			if(!player){
				playerTurn.innerHTML = `${players[0]} Wins`;
			} else {
				playerTurn.innerHTML = `${players[1]} Wins`;
			}
		} else	if(square[3].classList.contains('X') && square[4].classList.contains('X') && square[5].classList.contains('X') || square[3].classList.contains('O') && square[4].classList.contains('O') && square[5].classList.contains('O')){
			game = false;
			if(!player){
				playerTurn.innerHTML = `${players[0]} Wins`;
			} else {
				playerTurn.innerHTML = `${players[1]} Wins`;
			}
		} else	if(square[6].classList.contains('X') && square[7].classList.contains('X') && square[8].classList.contains('X') || square[6].classList.contains('O') && square[7].classList.contains('O') && square[8].classList.contains('O')){
			game = false;
			if(!player){
				playerTurn.innerHTML = `${players[0]} Wins`;
			} else {
				playerTurn.innerHTML = `${players[1]} Wins`;
			}
		} else	if(square[0].classList.contains('X') && square[3].classList.contains('X') && square[6].classList.contains('X') || square[0].classList.contains('O') && square[3].classList.contains('O') && square[6].classList.contains('O')){
			game = false;
			if(!player){
				playerTurn.innerHTML = `${players[0]} Wins`;
			} else {
				playerTurn.innerHTML = `${players[1]} Wins`;
			}
		} else	if(square[1].classList.contains('X') && square[4].classList.contains('X') && square[7].classList.contains('X') || square[1].classList.contains('O') && square[4].classList.contains('O') && square[7].classList.contains('O')){
			game = false;
			if(!player){
				playerTurn.innerHTML = `${players[0]} Wins`;
			} else {
				playerTurn.innerHTML = `${players[1]} Wins`;
			}
		} else	if(square[2].classList.contains('X') && square[5].classList.contains('X') && square[8].classList.contains('X') || square[2].classList.contains('O') && square[5].classList.contains('O') && square[8].classList.contains('O')){
			game = false;
			if(!player){
				playerTurn.innerHTML = `${players[0]} Wins`;
			} else {
				playerTurn.innerHTML = `${players[1]} Wins`;
			}
		} else	if(square[0].classList.contains('X') && square[4].classList.contains('X') && square[8].classList.contains('X') || square[0].classList.contains('O') && square[4].classList.contains('O') && square[8].classList.contains('O')){
			game = false;
			if(!player){
				playerTurn.innerHTML = `${players[0]} Wins`;
			} else {
				playerTurn.innerHTML = `${players[1]} Wins`;
			}
		} else	if(square[2].classList.contains('X') && square[4].classList.contains('X') && square[6].classList.contains('X') || square[2].classList.contains('O') && square[4].classList.contains('O') && square[6].classList.contains('O')){
			game = false;
			if(!player){
				playerTurn.innerHTML = `${players[0]} Wins`;
			} else {
				playerTurn.innerHTML = `${players[1]} Wins`;
			}
		} else {
			playerTurn.innerHTML = "Cat's Game!";
		}
	}
	if(!game){
		document.getElementById('newGame').setAttribute('style', 'display: inline');
	}
}



