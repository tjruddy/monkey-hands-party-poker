let deckObject = new Deck();
let handObject = new Hand(deckObject);

/* Testing Plebs Party */
handObject.hand = ["9C", "2D", "4C", "5D", "10C"];
console.log(handObject.isPlebsParty());
handObject.hand = ["12C", "13D", "3C", "4D", "5C"];
console.log(handObject.isPlebsParty());

/* Testing Royal Party */
handObject.hand = ["11D", "11S", "12S", "13D", "14C"];
console.log(handObject.isRoyalParty());
handObject.hand = ["9D", "12S", "11S", "14D", "14C"];
console.log(handObject.isRoyalParty());

/* Testing 3 of a kind */
handObject.hand = ["2S", "8D", "2H", "6C", "2D"];
console.log(handObject.isThreeOfAKind());
handObject.hand = ["6S", "2D", "2H", "6C", "5D"];
console.log(handObject.isThreeOfAKind());

/* Testing Straight */
handObject.hand = ["2D", "5H", "3D", "4S", "6D"];
console.log(handObject.isStraight());
handObject.hand = ["12D", "2H", "3D", "4S", "5D"];
console.log(handObject.isStraight());

/* Testing Flush */
handObject.hand = ["8D", "2D", "13D", "14D", "5D"];
console.log(handObject.isFlush());
handObject.hand = ["6D", "9H", "8S", "7S", "10S"];
console.log(handObject.isFlush());

/* Testing Kings and Queens Party */
handObject.hand = ["13H", "13D", "12S", "12H", "12D"];
console.log(handObject.isKingsAndQueens());
handObject.hand = ["2H", "3D", "4S", "5H", "5D"];
console.log(handObject.isKingsAndQueens());

/* Testing 18 */
handObject.hand = ["10H", "2D", "13D", "6D", "14D"];
console.log(handObject.isEighteen());
handObject.hand = ["12D", "13D", "10H", "14D", "12D"];
console.log(handObject.isEighteen());

/* Testing Straight Flush */
handObject.hand = ["5D", "7D", "8D", "6D", "9D"];
console.log(handObject.isStraightFlush());
handObject.hand = ["12D", "2D", "7C", "4H", "5D"];
console.log(handObject.isStraightFlush());

/* Testing Royal Flush */
handObject.hand = ["10H", "14H", "12H", "11H", "13H"];
console.log(handObject.isRoyalFlush());
handObject.hand = ["11D", "3C", "14H", "5D", "13H"];
console.log(handObject.isRoyalFlush());