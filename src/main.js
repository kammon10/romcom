var coverImg = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');

var buttonRandomCover = document.querySelector('.random-cover-button');
var buttonMakeCover = document.querySelector('.make-new-button');
var buttonSaveCover = document.querySelector('.save-cover-button');
var buttonHome = document.querySelector('.home-button');
var buttonViewSavedCovers = document.querySelector('.view-saved-button');
var buttonMakeMyBook = document.querySelector('.create-new-book-button');

var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedCoversView = document.querySelector('.saved-view');
var savedCoversSection = document.querySelector('.saved-covers-section');

var inputFieldCover = document.querySelector('#cover');
var inputFieldTitle = document.querySelector('#title');
var inputFieldDesc1 = document.querySelector('#descriptor1');
var inputFieldDesc2 = document.querySelector('#descriptor2');

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = new Cover();

window.addEventListener('load', generateRandomCover);

buttonRandomCover.addEventListener('click', generateRandomCover);
buttonMakeCover.addEventListener('click', changeToFormView);
buttonViewSavedCovers.addEventListener('click', changeToSavedCoversView);
buttonHome.addEventListener('click', changeToHomeView);
buttonMakeMyBook.addEventListener('click', displayNewBook);
buttonSaveCover.addEventListener('click', saveCover);

function generateRandomCover() {
  var coverImg = covers[getRandomIndex(covers)];
  var title = titles[getRandomIndex(titles)];
  var tagline1 = descriptors[getRandomIndex(descriptors)];
  var tagline2 = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(coverImg, title, tagline1, tagline2);
  displayCurrentCover();
}

function changeToFormView() {
  formView.classList.remove('hidden');
  homeView.classList.add('hidden');
  savedCoversView.classList.add('hidden');
  buttonRandomCover.classList.add('hidden');
  buttonSaveCover.classList.add('hidden');
  buttonHome.classList.remove('hidden');
}

function saveCover() {
  currentCover.cover = coverImg.src;
  currentCover.title = title.innerText;
  currentCover.tagline1 = tagline1.innerText;
  currentCover.tagline2 = tagline2.innerText;
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}

function changeToSavedCoversView() {
  savedCoversView.classList.remove('hidden');
  formView.classList.add('hidden');
  homeView.classList.add('hidden');
  buttonRandomCover.classList.add('hidden');
  buttonSaveCover.classList.add('hidden');
  buttonHome.classList.remove('hidden');
  displaySavedCoversSection();
}

function displaySavedCoversSection() {
  savedCoversSection.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML +=
      `<div class="mini-cover" id="${i}" ondblclick="deleteBook(this)">
          <img class="mini-cover" src="${savedCovers[i].cover}">
          <h2 class="cover-title">${savedCovers[i].title}</h2>
          <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
          <img class="price-tag" src="./assets/price.png">
          <img class="overlay" src="./assets/overlay.png">
      </div>`;
  }
}

function changeToHomeView() {
  savedCoversView.classList.add('hidden');
  formView.classList.add('hidden');
  homeView.classList.remove('hidden');
  buttonRandomCover.classList.remove('hidden');
  buttonSaveCover.classList.remove('hidden');
  buttonHome.classList.add('hidden');
}

function makeBook(book) {
  buttonMakeMyBook.type = 'button';
  book.cover = inputFieldCover.value;
  book.title = inputFieldTitle.value;
  book.tagline1 = inputFieldDesc1.value;
  book.tagline2 = inputFieldDesc2.value;
}

function saveInput() {
  covers.push(inputFieldCover.value);
  titles.push(inputFieldTitle.value);
  descriptors.push(inputFieldDesc1.value);
  descriptors.push(inputFieldDesc2.value);
}

function displayCurrentCover() {
  title.innerText = currentCover.title;
  coverImg.src = currentCover.cover;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function displayNewBook() {
  saveInput();
  makeBook(currentCover);
  displayCurrentCover();
  changeToHomeView();
}

function deleteBook(div) {
  savedCovers.splice(div.id, 1);
  div.remove();
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
