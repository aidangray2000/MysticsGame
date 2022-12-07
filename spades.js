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


function shuffle() {
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
}
// var select = document.getElementById("playerHandDropdown");

// var btn = document.getElementById("btn");

// btn.addEventListener("click", function() {

// });


//populates human card dropdown after deal button is clicked
function populateDropdown(){
	//show human player cards
    var $myDD = $("#playerHandDropdown");
    
    $myDD.empty()
    $myDD.append("<option value=\"\" disabled selected>--Hand--</option>");   
    for (var i = 0; i<human_hand.length; i++){
	// let value = human_hand[i].value+human_hand[i].suit;
    $myDD.append("<option value='"+ i +"'>"+human_hand[i].value + " of " + human_hand[i].suit + "</option>");   
    } 
	
	//hide button and first p saying human starts first
	document.getElementById('dealbtn').style.display = 'none';
	document.getElementById('firstP').style.display = 'none';
	document.getElementById('narrator').innerHTML = "Where cards played by computer and humans will go";
}

//gets a card that matches suit if possible
function getComputerCard(value, suit) {
    let highest = 0;
    let index = 0;
    for(let i = 0; i < computer_hand.length; i++) {
        if(computer_hand[i].suit == suit) {
            if(highest < computer_hand[i].num) {
                highest = computer_hand[i].num;
                index = i;
            }
        }
    }
    return index;
}

//shows card played by human after human chooses card from dropdown
function change_pic() {
    document.querySelector("#confirm").disabled = false;
	selectElement = document.querySelector('#playerHandDropdown');
	output = selectElement.value;
	console.log(output);
	//change narrator text
	const $p = document.querySelector("#narrator");
    humanCard = human_hand[output];
    let anyCardNotSpade = true;
    let totalCards = 0;
    for(let i = 0; i < human_hand.length; i++) {
        if(human_hand[i].suit != "Spades") {
            totalCards+=1;
        }
    }
    if(totalCards == 0) {
        anyCardNotSpade = false; 
    }
    if(human_hand[output].suit == "Spades" && !hasSpadesPlayed && anyCardNotSpade) {
        alert("Spades has not been played yet. Please select another suit");
        return;
    }
    $p.style = 'inline-block';
	$p.innerHTML="You played the " + human_hand[output].value + " of "  + human_hand[output].suit;
}

//displays computer card
function displayCompCard() {
    const $c = document.querySelector("#compHandDisplay");
    let index = getComputerCard(human_hand[output].value, human_hand[output].suit);
    compCard = computer_hand[index];
    $c.style = 'inline-block';
    $c.innerHTML="The Computer played the " + computer_hand[index].value + " of "  + computer_hand[index].suit;
    document.querySelector("#playerHandDropdown").disabled = true;
}

//decides who won the trick and checks to see if scoore threshold has been reached
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

    // this should remove the cards from the hands of the players once the scoring is determined.
    for(var i = 0; i < computer_hand.length; i++){
        if(computer_hand[i].value == compCard.value && computer_hand[i].suit == compCard.suit) {
            computer_hand.splice(i, 1)
        }
    }

    for(var i = 0; i < human_hand.length; i++){
        if(human_hand[i].value == humanCard.value && human_hand[i].suit == humanCard.suit) {
            human_hand.splice(i, 1)
        }
    }

    populateDropdown()

    document.querySelector("#computerScore").innerHTML = compPoints;
    document.querySelector("#humanScore").innerHTML = humanPoints;
    if(compPoints >= 100 || humanPoints >= 100) {
        if(compPoints > humanPoints) {
            alert("The Computer Has Won");
        } else {
            alert("You have beaten the computer");
        }
        gameEnd();
    }
    handEnd()
}

//resets hands and game prior to next hand/turn
function handEnd() {
    document.querySelector("#playerHandDropdown").disabled = false;
    compCard = null;
    humanCard = null;
    document.getElementById('compHandDisplay').style.display = 'none';
	document.getElementById('narrator').style.display = 'none';
}

//game end function (hard reset)
function gameEnd() {
    window.location.reload();
}