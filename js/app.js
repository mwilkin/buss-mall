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

function randomImageSelector(){
  // ToDo : Randomly select 3 new images
    
}

function addCurrentSetOfImages(event){
  // event.trigger.id = '';
  // event.trigger.src = '';

}

function displayResults(){


}

// Event Handler

function handleClick(event) {
  if(event.target.className === 'product'){
    totalVotesOnPage++;
    PRODUCTS[event.target.id].totalVotes++;

    if(totalVotesOnPage === 25){
      // ToDo: remove eventListener from container  
      // ToDo: If stop listening, display results
      displayResults();
      return;
    }

    randomImageSelector();
    addCurrentSetOfImages(event);
  }

}

container.addEventListener('click', handleClick);
