
//1. Array of objects with the details for every tea type
const teas=[
  {
     name: "Green Tea Collection",
     box:  'https://gatesfarmshop.co.uk/wp-content/uploads/IMG-20200523-WA0114.jpg',
     blends: "Supreme Matcha, Clean Matcha, Ginseng Matcha, Mint Matcha, Wonder Berry",
     description: "Pukka Green Tea Collection will have you surfing the greenest waves and dipping into the green pools of magical matcha and whole leaf greens made brilliant with cooling mint and refreshing lemon. Welcome in the spring of ginseng and the wonder of nature’s berries. Every tone and dappled shade of nature’s finest organic green teas are here in this glade. The collection includes 4 tea bags of each tea blend. ",
     preparation: "Pour boiling water directly on the bag of tea to allow the aromas to unfold better. Allow to seep and let every sip bring you closer to a greener world. Enjoy the waves!"
  },
  {
      name: "Herbal Tea Collection",
      box: 'https://gatesfarmshop.co.uk/wp-content/uploads/IMG-20200523-WA0116.jpg',
      blends: "Elderberry and Echinacea, Lemon, Ginger and Manuka Honey, Night Time, Three Mint, Feel New",
      description: "Pukka Herbal Collection will have your soul singing. Welcome to a collection of organic Pukka Herbal Collection, made to stir your soul. Enjoy the thick fruity warmth of Elderberry & Echinacea; the spicy-sweet heat of Lemon, Ginger & Manuka Honey; the sleepy crush of Night Time; the crisp cool of Three Mint; and the clean sweetness of Feel New. Your box of herbal delight. Sing, dance, love, live.",
      preparation: "Pour boiling water directly on the bag to allow the aromas to unfold better. Allow to seep and let every sip take you on your own mini herbal adventure. Enjoy a cozy get-together over a cup of delicious hot tea, or hold a self-indulgence evening in your own company."
  },
  {
     name: "Elegant English Breakfast Tea",
     box: 'https://gatesfarmshop.co.uk/wp-content/uploads/IMG-20200523-WA0132.jpg',
     blends: "Ruby Nam Lanh Black Tea",
     description: "Elegant English Breakfast Tea is a sophisticated whole leaf English Breakfast tea that is full of character with a wonderfully refreshing and quintessentially English finish. This tea is made from the youngest, organic leaves that grow wild in the Vietnamese rainforest. They are hand picked by H’mong and Zhao tribes who have enjoyed drinking this tea for centuries and as with all Pukka teas, they are naturally organic and totally free from artificial flavouring.",
     preparation: "Pour boiling water directly on the bag of tea to allow the aromas to unfold better. Allow to seep and let every sip to bring you closer to a slow, unhurried morning. Enjoy your time sipping it!"
  },
  
]

// 2. DOM element variables
const cardItems = document.querySelectorAll('.card_container');
const detailsElement = document.getElementById('details');
const carouselElement = document.getElementById('carousel');
const nameElement = document.getElementById('name');
const boxElement = document.getElementById('box');
const blendsElement = document.getElementById('blends');
const descriptionElement = document.getElementById('description');
const preparationElement = document.getElementById('preparation');
const messageElement = document.getElementById('buy-message');
const secondaryButtonElement = document.getElementById('secondary-button');

// 3. Load media to the carousel
// Loop through every element with the "card_container" class to get the elements and load content for each tea
for (let i = 0; i < cardItems.length; i++) {
  const teaId = `tea${i+1}`;
  const card = cardItems[i];
  const cardHeading = card.getElementsByTagName('h2')[0];
  const cardImage = card.getElementsByTagName('img')[0];
  card.addEventListener('click', () => {
    getTeaData(i);
    detailsElement.classList.remove('hidden'); // Assuming 'hidden' class hides the details section
    carouselElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  cardHeading.textContent = teas[i].name;
  cardImage.src = teas[i].box; 
}

// 4. Load tea details section
// Function that gets the tea details from array and renders it below the carousel
function getTeaData(index) {
const tea = teas[index];

const name = tea.name;
const box = tea.box;
const blends = tea.blends;
const description = tea.description;
const preparation = tea.preparation;

nameElement.textContent = name;
boxElement.src = box; 
blendsElement.textContent = blends;
descriptionElement.textContent = description;
preparationElement.textContent = preparation;

messageElement.textContent = 'Would you like to try this tea?';
secondaryButtonElement.textContent = 'Add to cart';
secondaryButtonElement.classList.remove('cancel');
secondaryButtonElement.classList.add('available');
}



// 5. Add to cart / Remove from cart button
secondaryButtonElement.addEventListener('click', () => addToCart());

function addToCart() {
if (secondaryButtonElement.classList.contains('available')) {
  let answer = window.confirm('Great choice! Do you want to place this tea in your cart?');

  if (answer) {
    messageElement.textContent = 'Done! We’ll let you know when your order is ready for shipping.';
    secondaryButtonElement.textContent = 'Remove from cart';
    secondaryButtonElement.classList.remove('available');
    secondaryButtonElement.classList.add('cancel');
  } else {
    return;
  }
} else if (secondaryButtonElement.classList.contains('cancel')) {
  let answer = window.confirm('Do you want to remove item from the cart?');

  if (answer) {
    messageElement.textContent = 'We’ve removed this item from your cart.';
    secondaryButtonElement.textContent = 'Add to cart';
    secondaryButtonElement.classList.remove('cancel');
    secondaryButtonElement.classList.add('available');
  } else {
    return;
  }
}
}