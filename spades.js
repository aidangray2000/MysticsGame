let human_hand = []
let computer_hand = []

function player_card() {
	const $dropdown = document.querySelector('#playerHandDropdown');
	display_card($dropdown.value);
}

//this should be able to be expanded to print for the computer as well
function display_card(card) {
	if(card.search("Spades")!=-1){
		$("#humanCard").attr('src', "images/spade.jpg").attr('alt',"Black Spade");
		display_number(card, "Spades");
	}
	if(card.search("Hearts")!=-1){
		$("#humanCard").attr('src', "images/heart.jpg").attr('alt',"Red Heart");
		display_number(card, "Hearts");
	}
	if(card.search("Diamonds")!=-1){
		$("#humanCard").attr('src', "images/diamond.jpg").attr('alt',"Red Diamond");
		display_number(card, "Diamonds");
	}
	if(card.search("Clubs")!=-1){
		$("#humanCard").attr('src', "images/club.jpg").attr('alt',"Black Club");
		display_number(card, "Clubs");
	}
	
}

//this can be expanded to show both computer and player texts
function display_number(card,suite){
	if(card.search("ace")!=-1){
		const $p = document.querySelector("#narrator");
		$p.innerHTML="You played the Ace of " + suite;
	}
	if(card.search("two")!=-1){
		const $p = document.querySelector("#narrator");
		$p.innerHTML="You played the Two of " + suite;
	}
	if(card.search("thr")!=-1){
		const $p = document.querySelector("#narrator");
		$p.innerHTML="You played the Three of " + suite;
	}
	if(card.search("fou")!=-1){
		const $p = document.querySelector("#narrator");
		$p.innerHTML="You played the Four of " + suite;
	}
	if(card.search("fiv")!=-1){
		const $p = document.querySelector("#narrator");
		$p.innerHTML="You played the Five of " + suite;
	}
	if(card.search("six")!=-1){
		const $p = document.querySelector("#narrator");
		$p.innerHTML="You played the Six of " + suite;
	}
	if(card.search("sev")!=-1){
		const $p = document.querySelector("#narrator");
		$p.innerHTML="You played the Seven of " + suite;
	}
	if(card.search("eig")!=-1){
		const $p = document.querySelector("#narrator");
		$p.innerHTML="You played the Eight of " + suite;
	}
	if(card.search("nin")!=-1){
		const $p = document.querySelector("#narrator");
		$p.innerHTML="You played the Nine of " + suite;
	}
	if(card.search("ten")!=-1){
		const $p = document.querySelector("#narrator");
		$p.innerHTML="You played the Ten of " + suite;
	}
	if(card.search("jac")!=-1){
		const $p = document.querySelector("#narrator");
		$p.innerHTML="You played the Jack of " + suite;
	}
	if(card.search("que")!=-1){
		const $p = document.querySelector("#narrator");
		$p.innerHTML="You played the Queen of " + suite;
	}
	if(card.search("kin")!=-1){
		const $p = document.querySelector("#narrator");
		$p.innerHTML="You played the King of " + suite;
	}
}



// program to shuffle the deck of cards

// declare card elements
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "ace",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "jack",
  "queen",
  "king",
];

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}



// deal cards
for(let i = 0; i < 26; i++) {
    if(i < 13) {
        human_hand.push(deck[i]);
    } else {
        computer_hand.push(deck[i]);
    }
}






