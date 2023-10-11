const cardArray = [
    //objects
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]


cardArray.sort(()=> 0.5 - Math.random()) //arrow function
console.log(cardArray)

const grid = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenIds = []
const cardsWon = []

console.log(grid)

function createBoard(){
    for(let i = 0; i< cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        console.log(card, i);
        card.addEventListener('click', flipCard) //only call the function if we click
        grid.append(card) //or appendChild
    }
    cardChosen=[]
    cardChosenIds=[]
}

createBoard();
function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardChosenIds[0]
    const optionTwoId = cardChosenIds[1]
    
    if (cardChosen[0]===cardChosen[1]){
        //alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
        
    }else{
        //alert('Sorry, try again!')
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }
    resultDisplay.textContent = cardsWon.length
    cardChosen=[]
    cardChosenIds=[]
    
    if(cardsWon.length === (cardArray.length/2)){
        resultDisplay.innerHTML = 'Congratulations! You found them all!'
    }
}

function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}