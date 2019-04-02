'use strict';
// ------
// 
// Global variables
// 
// ------

var container = document.getElementById('container');
var PRODUCTS = {};
var totalVotesOnPage = 0;
var previousProducts = [];
var currentProducts = [];


var productArray = [
  ['Bag', 'bag', './img/bag.jpg'],
  ['Banana', 'banana', './img/banana.jpg'],
  ['Bathroom', 'bathroom', './img/bathroom.jpg'],
  ['Boots', 'boots', './img/boots.jpg'],
  ['Breakfast', 'breakfast', './img/breakfast.jpg'],
  ['Bubblegum', 'bubblegum', './img/bubblegum.jpg'],
  ['Chair', 'chair', './img/chair.jpg'],
  ['Cthulhu', 'cthulhu', './img/cthulhu.jpg'],
  ['Dog-duck', 'dog-duck', './img/dog-duck.jpg'],
  ['Dragon', 'dragon', './img/dragon.jpg'],
  ['Pen', 'pen', './img/pen.jpg'],
  ['Pet-sweep', 'pet-sweep', './img/pet-sweep.jpg'],
  ['Scissors', 'scissors', './img/scissors.jpg'],
  ['Shark', 'shark', './img/shark.jpg'],
  ['Sweep', 'sweep', './img/sweep.jpg'],
  ['Tauntaun', 'tauntaun', './img/tauntaun.jpg'],
  ['Unicorn', 'unicorn', './img/unicorn.jpg'],
  ['Usb', 'usb', './img/usb.jpg'],
  ['Water-can', 'water-can', './img/water-can.jpg'],
  ['Wine-glass', 'wine-glass', './img/wine-glass.jpg']

];

// ------
// 
// Constructor function
// 
// ------

function Product(name, HTMLid, imgFilePath){
  this.name = name;
  this.imgFilePath = imgFilePath;
  this.HTMLid = HTMLid;
  this.totalVotes = this.totalViews = 0;

  PRODUCTS[this.HTMLid] = this;
  
}

Product.prototype.getPercentClicked = function (){
  return this.totalVotes / this.totalViews;
};

// Render to the DOM

Product.prototype.render = function(parentId){
  var parent = document.getElementById(parent);

  var img = document.createElement('img');
  img.setAttribute('id', this.HTMLid);
  img.setAttribute('src', this.imgFilePath);
  img.setAttribute('class', 'product');

  parent.appendChild(img);

};

function createObjects(){
  for( var i =0 ; i< productArray.length; i++){
    var product = new Product (productArray[i][1], productArray[i][2], productArray[i][2]);
  }
}
createObjects();

function randomImageSelector(){
  // ToDo : Randomly select 3 new images
  // need conditional statements
  // probably use while loop
    
}

function addCurrentSetOfImages(event){
  // event.trigger.id = '';
  // event.trigger.src = '';

}

function displayResults(){
console.log('5 votes');

}

function removeListener(){
  container.removeEventListener('click', handleClick);
}

// Event Handler

function handleClick(event) {
  if(event.target.className === 'product'){
    totalVotesOnPage++;
    // PRODUCTS[event.target.id].totalVotes++;
    // console.log(event.target.id);
    // console.log(PRODUCTS[event.target.id]);
    // console.log(PRODUCTS);
    console.log(totalVotesOnPage);
    if(totalVotesOnPage === 25){
      removeListener();
      displayResults();
      return;
    }

    randomImageSelector();
    addCurrentSetOfImages(event);
  }

}

container.addEventListener('click', handleClick);
