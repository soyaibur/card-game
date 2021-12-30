const SUITS = ["♥","♦","♠","♣"]
const VALUE = ["A","1","2","3","4","5","6","7","8","9","j","Q","K"]


export default class Deck {
    constructor(cards = freshDeck()){
     this.cards = cards
    }
}

class Card {
    constructor(suit,value){
     this.suit = suit
     this.value = value
    }
}

function freshDeck(){
    return SUITS.flatMap((suit)=>{
       return VALUE.map((value)=>{
           return new Card(suit,value)
       })
    })
}

