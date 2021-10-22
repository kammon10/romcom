// Create variables targetting the relevant DOM elements here 👇



var coverImg = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var buttonRandomCover = document.querySelector('.random-cover-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(coverImg, title, tagline1, tagline2);

// Add your event listeners here 👇
window.addEventListener('load', createRandomCover(currentCover));
buttonRandomCover.addEventListener('click', function() {
  createRandomCover(currentCover);
});


// Create your event handlers and other functions here 👇
function createRandomCover(cover) {
  cover.title.innerText = titles[getRandomIndex(titles)];
  cover.cover.src = covers[getRandomIndex(covers)];
  cover.tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  cover.tagline2.innerText = descriptors[getRandomIndex(descriptors)];
};


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
