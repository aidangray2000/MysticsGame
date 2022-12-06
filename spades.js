let human_hand = []
let computer_hand = []
let hasSpadesPlayed = false;
let humanCard;
let compCard;
let humanPoints = 0;
let compPoints = 0;
// function player_card() {
// 	const $dropdown = document.querySelector('#playerHandDropdown');
// 	display_card($dropdown.value);
// }

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
const suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
const values = [
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Jack",
  "Queen",
  "King",
  "Ace",
];
const valuesNum = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
];

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { value: values[x], suit: suits[i], num: valuesNum[x]};
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

// var select = document.getElementById("playerHandDropdown");

// var btn = document.getElementById("btn");

// btn.addEventListener("click", function() {

// });


//populates human card dropdown after deal button is clicked
function populateDropdown(){
	//show human player cards
    var $myDD = $("#playerHandDropdown");
    for (var i = 0; i<human_hand.length; i++){
	// let value = human_hand[i].value+human_hand[i].suit;
    $myDD.append("<option value='"+ i +"'>"+human_hand[i].value + " of " + human_hand[i].suit + "</option>");   
    } 
	
	//hide button and first p saying human starts first
	document.getElementById('dealbtn').style.display = 'none';
	document.getElementById('firstP').style.display = 'none';
	document.getElementById('narrator').innerHTML = "Where cards played by computer and humans will go";
}


function getComputerCard(value, suit) {
    for(let i = 0; i < 13; i++) {
        if(computer_hand[i].suit == suit) {
            return i;
        }
    }
    return 0;
}

//shows card played by human after human chooses card from dropdown
function change_pic() {
	selectElement = document.querySelector('#playerHandDropdown');
	output = selectElement.value;
	console.log(output);
	//change narrator text
	const $p = document.querySelector("#narrator");
    humanCard = human_hand[output];
	$p.innerHTML="You played the " + human_hand[output].value + " of "  + human_hand[output].suit;
}


function displayCompCard() {
    const $c = document.querySelector("#compHandDisplay");
    let index = getComputerCard(human_hand[output].value, human_hand[output].suit);
    compCard = computer_hand[index];
    $c.innerHTML="The Computer played the " + computer_hand[index].value + " of "  + computer_hand[index].suit;
    document.querySelector("#playerHandDropdown").disabled = true;
}

function gameLogic() {
    if(compCard.suit != humanCard.suit) {
        humanPoints += 10;
    } else {
        if(compCard.num > humanCard.num) {
            compPoints += 10;
        } else {
            humanPoints += 10;
        }
    }
    document.querySelector("#computerScore").innerHTML = compPoints;
    document.querySelector("#humanScore").innerHTML = humanPoints;
}