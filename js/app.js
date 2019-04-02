'use strict';

var container = document.getElementById('container');

var PRODUCTS = {};
var totalVotes = 0;

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

Product.prototype.render = function(parentId){
  var parent = document.getElementById(parent);

  var img = document.createElement('img');
  img.setAttribute('id', this.HTMLid);
  img.setAttribute('src', this.imgFilePath);
  img.setAttribute('class', 'product');

  parent.appendChild(img);


}


// render on to the page












function handleClick(event) {
  if(event.target.className === 'product'){
    PRODUCTS[event.target.id].totalVotes++;
    
    // totalVotes++;
    if(totalVotes === 25){
      totalVotes = 0;
    }
  }
  console.log('totalVotes');
}

container.addEventListener('click', handleClick);



