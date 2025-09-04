class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  } // constructor()
} // Card Class

class Deck {
  constructor() {
    this.deck = [
      "2H",
      "3H",
      "4H",
      "5H",
      "6H",
      "7H",
      "8H",
      "9H",
      "10H",
      "11H",
      "12H",
      "13H",
      "14H",
      "2D",
      "3D",
      "4D",
      "5D",
      "6D",
      "7D",
      "8D",
      "9D",
      "10D",
      "11D",
      "12D",
      "13D",
      "14D",
      "2C",
      "3C",
      "4C",
      "5C",
      "6C",
      "7C",
      "8C",
      "9C",
      "10C",
      "11C",
      "12C",
      "13C",
      "14C",
      "2S",
      "3S",
      "4S",
      "5S",
      "6S",
      "7S",
      "8S",
      "9S",
      "10S",
      "11S",
      "12S",
      "13S",
      "14S",
    ];

    this.shuffleDeck();
  } // constructor()

  shuffleDeck() {
    for (let i = this.deck.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * i);
      let temp = this.deck[i];
      this.deck[i] = this.deck[rand];
      this.deck[rand] = temp;
    } // for()
    return this.deck;
  } // shuffleDeck()

  dealHand() {
    let hand = [];
    for (let i = 0; i < 5; i++) {
      hand.push(this.deck.pop());
    } // for()
    return hand;
  } // dealHand()

  addOne() {
    return this.deck.pop();
  }
} // Deck Class

class User {
  constructor(name, bankroll, bet) {
    this.bankroll = bankroll;
    this.bet = bet;
    this.name = name;
  } // constructor()
} // User Class

class Hand {
  constructor() {
    this.hand = [];
  } // constructor()

  isPlebsParty() {
    for (let i = 0; i < this.hand.length; i++) {
      if (parseInt(this.hand[i]) > 10) {
        return false;
      }
    }
    return true;
  }

  isRoyalParty() {
    for (let i = 0; i < this.hand.length; i++) {
      if (parseInt(this.hand[i]) <= 10) {
        return false;
      }
    } // for()
    return true;
  } // isRoyalParty()

  isThreeOfAKind() {
    let hand = [];
    let count = [];

    for (let i = 0; i < this.hand.length; i++) {
      hand.push(parseInt(this.hand[i]));
    }

    let sortedHand = hand.sort(function (a, b) {
      return a - b;
    });
    let firstChild = sortedHand[0];

    for (let i = 0; i < sortedHand.length; i++) {
      if (count.length < 3) {
        if (firstChild == sortedHand[i]) {
          count.push(sortedHand[i]);
        } else {
          count = [];
          count.push(sortedHand[i]);
          firstChild = sortedHand[i];
        }
      }
    }
    if (count.length >= 3) {
      return true;
    } else {
      return false;
    }
  } // isThreeOfAKind()

  isStraight() {
    let hand = [];
    for (let i = 0; i < this.hand.length; i++) {
      hand.push(parseInt(this.hand[i]));
    }
    let sortedHand = hand.sort(function (a, b) {
      return a - b;
    });
    let firstChild = sortedHand[0];

    for (let i = 0; i < this.hand.length; i++) {
      if (firstChild != sortedHand[i]) {
        return false;
      }
      firstChild++;
    }
    return true;
  } // isStraight()

  isFlush() {
    let text = this.hand[0].replace(/[0-9]/g, "");
    for (let i = 0; i < this.hand.length; i++) {
      let t = this.hand[i].replace(/[0-9]/g, "");
      if (text != t) {
        return false;
      }
    }
    return true;
  } // isFlush()

  isKingsAndQueens() {
    for (let i = 0; i < this.hand.length; i++) {
      if (parseInt(this.hand[i]) != 12) {
        if (parseInt(this.hand[i]) != 13) {
          return false;
        }
      }
    } // for()
    return true;
  } // isKingsAndQueens()

  isEighteen() {
    let sum = 0;
    for (let i = 0; i < this.hand.length; i++) {
      if (parseInt(this.hand[i]) <= 10) {
        sum += parseInt(this.hand[i]);
      } // if
    } // for()
    if (sum == 18) {
      return true;
    } else {
      return false;
    }
  } // isEighteen()

  isStraightFlush() {
    if (this.isStraight()) {
      let text = this.hand[0].replace(/[0-9]/g, "");
      let numb = parseInt(this.hand[0]);

      for (let i = 0; i < this.hand.length; i++) {
        if (parseInt(this.hand[i]) <= 10) {
          let t = this.hand[i].replace(/[0-9]/g, "");
          if (text != t) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  } // isStraightFlush()

  isRoyalFlush() {
    // Royal Flush: Ace, King, Queen, Jack, Ten of the same suit
    if (this.isFlush()) {
      let hand = [];
      for (let i = 0; i < this.hand.length; i++) {
        hand.push(parseInt(this.hand[i]));
      }
      let sortedHand = hand.sort(function (a, b) {
        return a - b;
      });
      
      // Check if we have 10, 11, 12, 13, 14 (Ten, Jack, Queen, King, Ace)
      return sortedHand[0] === 10 && 
             sortedHand[1] === 11 && 
             sortedHand[2] === 12 && 
             sortedHand[3] === 13 && 
             sortedHand[4] === 14;
    }
    return false;
  } // isRoyalFlush()
} // Hand Class

class Round {
  constructor(user) {
    this.user = user;
    this.deck = new Deck();
    this.hand = new Hand();
    this.cards = [];
    this.selectedCards = [];
    this.discarded = [0, 0, 0, 0, 0];
    this.started = false;
    this.isDiscarded = false;
    this.turn = 0; // 0 = initial deal, 1-3 = turns
    this.phase = "deal"; // "deal" or "discard"
    this.cardsDiscardedThisTurn = 0;
  }

  start() {
    let self = this;
    let board = document.querySelector("#board");
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = '<img src="./images/cards/BackgroundBlack.png">';

    for (let i = 0; i < self.deck.deck.length; i++) {
      let newCard = card.cloneNode(true);
      newCard.id = self.deck.deck[i];

      newCard.addEventListener("click", function () {
        self.toggleSelect(newCard.id);
      });

      board.append(newCard);
      newCard.style.visibility = "hidden";
      self.cards.push(newCard);
    }

    self.initCards(card);
  }

  initCards(card) {
    let self = this;
    for (let i = 0; i < 5; i++) {
      let newCard = card.cloneNode(true);
      newCard.style.top = 20 + i * -3 + "px";
      newCard.style.left = 60 + i * -3 + "px";
      board.append(newCard);

      newCard.addEventListener("click", function () {
        if (!self.started) {
          // Initial deal: Deal 5 cards
          self.hand.hand = self.deck.dealHand();
          for (let i = 0; i < self.hand.hand.length; i++) {
            let card = document.getElementById(self.hand.hand[i]);
            setTimeout(function () {
              self.animate(card, i);
            }, i * 100);
          }
          self.started = true;
          self.turn = 1;
          self.phase = "discard";
          self.updateTurnDisplay();
        } else {
          if (self.phase === "deal" && self.isDiscarded) {
            // Check if we're past turn 3
            if (self.turn > 3) {
              console.log('Cannot click deck after turn 3');
              return;
            }
            
            // Replace discarded cards and move to next turn
            self.replaceDiscardedCards();
            self.turn++;
            self.phase = "discard";
            self.isDiscarded = false;
            self.selectedCards = [];
            self.cardsDiscardedThisTurn = 0;
            
            // After Turn 3, automatically check for win
            if (self.turn > 3) {
              self.showResult();
            } else if (self.turn <= 3) {
              self.updateTurnDisplay();
            }
          }
        }
      });
    }
  }

  animate(card, i) {
    card.style.visibility = "visible";
    card.style.zIndex = 20 + i;
    if (i < 3) {
      card.style.top = "200px";
      card.style.left = i * 120 + "px";
    } else {
      card.style.top = "380px";
      card.style.left = (i - 2) * 120 - 60 + "px";
    }
    card.style.transform = "rotate(" + 360 + "deg)";
    card.firstChild.src = "./images/cards/" + card.id + ".png";

    setTimeout(() => {
      card.style.zIndex = "0";
    }, 1000);
  }

  showResult() {
    console.log('showResult called');
    let result = this.checkResult();
    console.log('Result calculated:', result);
    
    this.user.bankroll += result;
    document.querySelector("#bankroll").textContent = this.user.bankroll;
    document.querySelector("#winBankroll").textContent =
      "Your current balance: $" + this.user.bankroll;

    if (result > 0) {
      document.querySelector("#winResult").textContent =
  "You win: $" + result + (this.lastWinName ? " — " + this.lastWinName : "");
    } else {
      document.querySelector("#winResult").textContent =
        "You lose: $" + this.user.bet;
    }
    
    console.log('About to check zero balance');
    // Check if out of money after game result
    if (game.checkZeroBalance()) {
      console.log('Zero balance detected, returning early');
      return;
    }
    
    console.log('About to show modal');
    setTimeout(() => {
      document.querySelector("#resultModal").style.display = "block";
      if (result > 0) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
    }, 1000);
  }

  toggleSelect(id) {
    let self = this;
    if (!self.isDiscarded) {
      if (self.started) {
        if (self.selectedCards.includes(id)) {
          let i = self.selectedCards.indexOf(id);
          self.selectedCards.splice(i, 1);
          self.deselectCard(id);
        } else {
          self.selectedCards.push(id);
          self.selectCard(id);
        }
      }
    }
  }

  selectCard(id) {
    // selects the card by making it bigger
    let card = document.getElementById(id);
    card.style.transform = "scale(1.1,1.1)";
  }

  deselectCard(id) {
    // deselects the card by returning it to original scale
    let card = document.getElementById(id);
    card.style.transform = "scale(1.0, 1.0)";
  }

  discarding() {
    let self = this;
    let d = [];
    
    // Check if we're past turn 3
    if (self.turn > 3) {
      console.log('Cannot discard after turn 3');
      return;
    }
    
    if (!self.isDiscarded && self.selectedCards.length > 0) {
      for (let i = 0; i < self.selectedCards.length; i++) {
        let v = self.hand.hand.indexOf(self.selectedCards[i]);
        self.discarded[v] = 1;
        d.push(v);
        setTimeout(function () {
          self.discard(self.selectedCards[i], i);
        }, i * 100);
      }
      d = d.sort();
      for (var i = d.length - 1; i >= 0; i--) {
        self.hand.hand.splice(d[i], 1);
      }

      self.isDiscarded = true;
      self.cardsDiscardedThisTurn = self.selectedCards.length;
      self.phase = "deal"; // Ready to replace cards
      self.updateTurnDisplay();
    }
  }

  replaceDiscardedCards() {
    let self = this;
    for (let i = 0; i < self.discarded.length; i++) {
      if (self.discarded[i] === 1) {
        self.discarded[i] = 0;
        let id = self.deck.addOne();
        self.hand.hand.splice(i, 0, id);
        let card = document.getElementById(id);
        setTimeout(function () {
          self.animate(card, i);
        }, i * 100);
      }
    }
  }

  updateTurnDisplay() {
    let turnText = document.querySelector("#turnDisplay");
    if (!turnText) {
      // Create turn display if it doesn't exist
      turnText = document.createElement("div");
      turnText.id = "turnDisplay";
      turnText.className = "turn-display";
      document.querySelector(".game-btns").appendChild(turnText);
    }
    
    if (!this.started) {
      turnText.textContent = "Click deck to deal cards";
    } else if (this.phase === "discard") {
      if (this.turn === 1) {
        turnText.textContent = "Turn 1: Select cards to discard";
      } else if (this.turn === 2) {
        turnText.textContent = "Turn 2: Select cards to discard";
      } else if (this.turn === 3) {
        turnText.textContent = "Turn 3: Select cards to discard";
      }
    } else if (this.phase === "deal") {
      if (this.turn === 1) {
        turnText.textContent = "Turn 1: Click deck to replace discarded cards";
      } else if (this.turn === 2) {
        turnText.textContent = "Turn 2: Click deck to replace discarded cards";
      } else if (this.turn === 3) {
        turnText.textContent = "Turn 3: Click deck to replace discarded cards";
      }
    }
  }

  discard(id, i) {
    // move card to pack
    let card = document.getElementById(id);
    card.firstChild.src = "./images/cards/BackgroundBlack.png";
    card.style.transform = "scale(1.0) rotate(" + 360 + "deg)";
    card.style.zIndex = 10 + i;
    card.style.top = 20 + i * -3 + "px";
    card.style.left = 190 + i * -3 + "px";
  }

  checkResult() {
    let result = 0;
    let bet = this.user.bet;
    this.lastWinName = null;
  
    if (this.hand.isRoyalFlush() === true) {
      result = bet * 512;
      this.lastWinName = "Royal Flush";
    } else if (this.hand.isStraightFlush() === true) {
      result = bet * 256;
      this.lastWinName = "Straight Flush";
    } else if (this.hand.isEighteen() === true) {
      result = bet * 128;
      this.lastWinName = "18";
    } else if (this.hand.isKingsAndQueens() === true) {
      result = bet * 64;
      this.lastWinName = "Kings & Queens";
    } else if (this.hand.isFlush() === true) {
      result = bet * 32;
      this.lastWinName = "Flush";
    } else if (this.hand.isStraight() === true) {
      result = bet * 16;
      this.lastWinName = "Straight";
    } else if (this.hand.isThreeOfAKind() === true) {
      result = bet * 8;
      this.lastWinName = "3 of a Kind";
    } else if (this.hand.isRoyalParty() === true) {
      result = bet * 4;
      this.lastWinName = "Royal Party";
    } else if (this.hand.isPlebsParty() === true) {
      result = bet * 2;
      this.lastWinName = "Plebs Party";
    } else {
      this.lastWinName = null; // lose
    }
  
    return result;
  }
  
} // Round Class

class Game {
  constructor(user) {
    this.user = user;
    this.round = new Round(this.user);
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    // Check if user data exists in localStorage
    const storedUser = localStorage.getItem('monkeyHandsUser');
    const lastVisit = localStorage.getItem('monkeyHandsLastVisit');
    
    console.log('Stored user:', storedUser);
    console.log('Current user:', this.user.name, this.user.bankroll);
    
    // Always show the credentials message
    this.showCredentialsMismatch();
    
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        console.log('Parsed user data:', userData);
        // Verify the current user matches stored user
        if (userData.username === this.user.name && userData.bankroll === this.user.bankroll) {
          console.log('User matches, showing last visit');
          // Show last visit message as well
          this.displayLastVisit(lastVisit);
        } else {
          console.log('User mismatch, keeping credentials message');
        }
      } catch (e) {
        console.log('Error parsing user data:', e);
      }
    } else {
      console.log('No stored user, keeping credentials message');
    }
    
    // Update last visit timestamp
    this.updateLastVisit();
  }

  displayLastVisit(lastVisit) {
    if (lastVisit) {
      const visitDate = new Date(lastVisit);
      const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      };
      const formattedDate = visitDate.toLocaleDateString('en-US', options);
      
      // Create or update last visit display in footer
      let lastVisitDiv = document.querySelector('#lastVisit');
      if (!lastVisitDiv) {
        lastVisitDiv = document.createElement('div');
        lastVisitDiv.id = 'lastVisit';
        lastVisitDiv.className = 'last-visit';
        document.querySelector('footer').appendChild(lastVisitDiv);
      }
      lastVisitDiv.innerHTML = `Your last visit: ${formattedDate}`;
      lastVisitDiv.style.display = 'block'; // Make sure it's visible
    }
  }

  showCredentialsMismatch() {
    console.log('showCredentialsMismatch called');
    // Create credentials mismatch message inside the welcome message box
    let mismatchDiv = document.querySelector('#credentialsMismatch');
    if (!mismatchDiv) {
      mismatchDiv = document.createElement('div');
      mismatchDiv.id = 'credentialsMismatch';
      mismatchDiv.className = 'credentials-mismatch';
      // Insert inside the welcome message box
      document.querySelector('.wc-message').appendChild(mismatchDiv);
      console.log('Created credentials mismatch div');
    }
    
    mismatchDiv.innerHTML = `
      <div class="mismatch-message">
        <p>Not you? <a href="#" onclick="game.changeCredentials(); return false;" class="change-credentials-link">Change your credentials</a></p>
      </div>
    `;
    console.log('Set credentials mismatch HTML');
  }

  updateLastVisit() {
    // Store current visit timestamp
    localStorage.setItem('monkeyHandsLastVisit', new Date().toISOString());
    
    // Store current user data
    const userData = {
      username: this.user.name,
      bankroll: this.user.bankroll,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('monkeyHandsUser', JSON.stringify(userData));
  }

  changeCredentials() {
    // Redirect to create new account
    window.location.href = 'index.html';
  }

  checkZeroBalance() {
    if (this.user.bankroll <= 0) {
      this.showOutOfMoneyMessage();
      return true;
    }
    return false;
  }

  showOutOfMoneyMessage() {
    // Hide the current screen
    document.querySelector(".home-screen").style.display = "none";
    document.querySelector(".game-screen").style.display = "none";
    
    // Create out of money screen
    let outOfMoneyDiv = document.querySelector('#outOfMoneyScreen');
    if (!outOfMoneyDiv) {
      outOfMoneyDiv = document.createElement('div');
      outOfMoneyDiv.id = 'outOfMoneyScreen';
      outOfMoneyDiv.className = 'out-of-money-screen';
      document.body.appendChild(outOfMoneyDiv);
    }
    
    outOfMoneyDiv.innerHTML = `
      <div class="out-of-money-content">
        <div class="monkey"></div>
        <div class="out-of-money-message">
          <h2>You're Out of Money!</h2>
          <p>Your account balance has reached $0.</p>
          <p>Better luck next time!</p>
          <button onclick="game.quitToCreateAccount()" class="quit-account-btn">Create New Account</button>
        </div>
      </div>
    `;
    
    outOfMoneyDiv.style.display = "block";
  }

  quitToCreateAccount() {
    // Clear localStorage and redirect to create account
    localStorage.removeItem('monkeyHandsUser');
    localStorage.removeItem('monkeyHandsLastVisit');
    window.location.href = 'index.html';
  }

  increaseBet() {
    let betInput = document.querySelector("#betInput");
    let self = this;
    if (self.user.bet < self.user.bankroll) self.user.bet += 1;
    betInput.value = self.user.bet;
  }

  decreaseBet() {
    let betInput = document.querySelector("#betInput");
    let self = this;
    if (self.user.bet > 2) self.user.bet -= 1;
    betInput.value = self.user.bet;
  }

  setBet(value) {
    let betInput = document.querySelector("#betInput");
    let betError = document.querySelector("#betError");
    let self = this;
    
    // Clear any previous error
    betError.style.display = "none";
    betError.textContent = "";
    
    // Check if value is empty or invalid
    if (value === "" || isNaN(value) || value === null) {
      betError.textContent = "Please enter a valid bet amount";
      betError.style.display = "block";
      return false;
    }
    
    // Convert to number and validate
    let newBet = parseInt(value);
    
    // Ensure bet is at least 2
    if (newBet < 2) {
      betError.textContent = "Minimum bet is $2";
      betError.style.display = "block";
      newBet = 2;
    }
    
    // Ensure bet doesn't exceed bankroll
    if (newBet > self.user.bankroll) {
      betError.textContent = "Bet cannot exceed your bankroll ($" + self.user.bankroll + ")";
      betError.style.display = "block";
      newBet = self.user.bankroll;
    }
    
    self.user.bet = newBet;
    betInput.value = self.user.bet;
    return true;
  }

  play() {
    let betInput = document.querySelector("#betInput");
    let betError = document.querySelector("#betError");
    
    // Validate the current bet before starting the game
    if (!this.setBet(betInput.value)) {
      // If validation fails, don't start the game
      return;
    }
    
    // Check if bet is valid for starting the game
    if (this.user.bet < 2) {
      betError.textContent = "Please enter a bet amount of at least $2";
      betError.style.display = "block";
      return;
    }
    
    if (this.user.bet > this.user.bankroll) {
      betError.textContent = "Bet cannot exceed your bankroll ($" + this.user.bankroll + ")";
      betError.style.display = "block";
      return;
    }
    
    // Clear any error messages and start the game
    betError.style.display = "none";
    document.querySelector(".home-screen").style.display = "none";
    document.querySelector(".game-screen").style.display = "block";
    this.newRound();
  }

  newRound() {
    this.user.bankroll -= this.user.bet;
    document.querySelector("#bankroll").textContent = this.user.bankroll;
    document.querySelector("#yourBet").textContent =
      "Your bet: " + this.user.bet;
    
    // Check if out of money after placing bet
    if (this.checkZeroBalance()) {
      return;
    }
    
    this.round = new Round(this.user);
    this.round.start();
  }

  discarding() {
    this.round.discarding();
  }

  backToHome() {
    document.querySelector("#resultModal").style.display = "none";
    document.querySelector("#board").innerHTML = null;
    document.querySelector(".home-screen").style.display = "block";
    document.querySelector(".game-screen").style.display = "none";
  }

  showRules() {
    let btn = document.querySelector("#rules");
    if (btn.style.display === "block") {
      btn.style.display = "none";
    } else {
      btn.style.display = "block";
    }
  }

  showRulesInGame() {
    let btn = document.querySelector("#rules-game");
    let rulesBtn = document.querySelector("#rules-btn-game");
    
    if (btn.style.display === "block") {
      btn.style.display = "none";
    } else {
      btn.style.display = "block";
    }
    
    // Force opacity to 1 on mobile to prevent fade effect
    if (this.isMobileDevice() && rulesBtn) {
      rulesBtn.style.opacity = "1";
      rulesBtn.style.transition = "none";
      rulesBtn.style.backgroundColor = "#44967c";
      
      // Ensure icon color is preserved
      let icon = rulesBtn.querySelector('i');
      if (icon) {
        icon.style.color = "#FCEBC5";
      }
    }
  }
  
  isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           (navigator.maxTouchPoints && navigator.maxTouchPoints > 1);
  }

  checkWin() {
    console.log('Check Hand button pressed');
    console.log('Game started:', this.round.started);
    console.log('Current hand:', this.round.hand.hand);
    console.log('Current turn:', this.round.turn);
    console.log('Current phase:', this.round.phase);
    
    // Check if game has started and has cards
    if (!this.round.started || !this.round.hand.hand || this.round.hand.hand.length === 0) {
      console.log('Game not started or no cards in hand');
      alert('Please start the game first by clicking the deck to deal cards!');
      return;
    }
    
    console.log('About to call showResult');
    // Check the current hand and show results
    this.round.showResult();
    console.log('showResult called');
  }



  exitMessage() {
    document.querySelector("#bankroll2").textContent = this.user.bankroll;
    document.querySelector(".exit-screen").style.display = "block";
    document.querySelector(".home-screen").style.display = "none";
    document.querySelector(".game-screen").style.display = "none";
    // Hide the result modal if it's showing
    document.querySelector("#resultModal").style.display = "none";
  }

  exitGame() {
    window.location.href = "index.html";
  }
}
