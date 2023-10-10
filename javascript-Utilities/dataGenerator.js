// make a function that generates an array of JSON objects
const categories = [
  "Green Tea",
  "Black Tea",
  "Herbal Tea",
  "Chai Tea",
  "Decaf",
];

const teaBlendNames = [
  "Velvet Rose Chamomile Herbal Tea",
  "Midsummer Night's Dream Green Tea",
  "Mango Tango Oolong Fusion",
  "Golden Sunrise Rooibos Infusion",
  "Zen Garden Matcha Green Tea",
  "Lavender Eucalyptus Relaxation Blend",
  "Spiced Apple Pie Chai Tea",
  "Himalayan Honey Darjeeling Black Tea",
  "Tropical Paradise Coconut Oolong",
  "Autumn Harvest Pumpkin Spice Rooibos",
  "Blueberry Bliss White Tea",
  "Mystic Mint Lavender Infusion",
  "Citrus Serenade Green Tea",
  "Wild Berry Hibiscus Delight",
  "Chocolate Chai Indulgence",
  "Tranquil Lemon Ginger Herbal Tea",
  "Jasmine Pearl Elegance",
  "Emerald Forest Sencha Blend",
  "Sweet Almond Amaretto Black Tea",
  "Cozy Campfire S'mores Rooibos",
];
const teaBlendDescriptions = [
  "Delicate white tea infused with luscious blueberries for a soothing, fruity escape.",
  "A calming blend of mint and lavender, perfect for moments of reflection and relaxation.",
  "Green tea kissed by the vibrant flavors of citrus, creating a refreshing and invigorating brew.",
  "A harmonious mix of wild berries and hibiscus, a burst of flavor in every sip.",
  "Indulge in the rich blend of chocolate and chai spices, a decadent treat for your taste buds.",
  "Unwind with the soothing combination of lemon and ginger, a perfect way to de-stress.",
  "Elegantly fragrant jasmine pearls, a floral symphony in a cup.",
  "Sencha green tea with notes of the emerald forest, a taste of nature's tranquility.",
  "A delightful black tea with the sweet essence of almond and a hint of amaretto sophistication.",
  "Experience the warmth of a campfire with this s'mores-inspired rooibos blend, a cozy delight.",
];
const prices = [6.99, 7.99, 8.99, 9.99, 10.99, 14.99, 17.99];
const images = [
  "https://www.flickr.com/photos/65509607@N08/52724539530/",
  "https://www.flickr.com/photos/157135985@N07/52911279011/",
  "https://www.flickr.com/photos/giantg/49900030053/",
  "https://www.flickr.com/photos/janicelin/51095810253/",
  "https://www.flickr.com/photos/calistalee/3134408624/",
  "https://www.flickr.com/photos/digitalcrop/17250636372/",
  "https://www.flickr.com/photos/zzmeika/30190948771/",
  "https://www.flickr.com/photos/134654275@N08/34878773383/",
  "https://www.flickr.com/photos/sashank/2743047562/",
];

const ratings = [1, 2, 3, 4, 5];

function getRandomStringFromArray(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generateArray(numberOfObjects) {
  let products = [...Array(numberOfObjects)].map((_, index) => ({
    id: index + 1,
    name: teaBlendNames[index % teaBlendNames.length], // Cycle through names
    description: teaBlendDescriptions[index % teaBlendDescriptions.length],
    price: getRandomStringFromArray(prices),
    image: getRandomStringFromArray(images),
    inStock: Math.floor(Math.random() * 7),
    reviews: Math.floor(Math.random() * 300),
    ratings: Math.floor(Math.random() * ratings.length + 1),
    category: getRandomStringFromArray(categories),
  }));
  return products;
}

console.log(generateArray(10));
