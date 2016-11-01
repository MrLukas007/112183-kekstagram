'use strict';
var gallery = require('./gallery');
// Отрисовка одного элемента
// var getImageElement = function(image, itemCounter) {
//   var template = document.querySelector('template');
//   var templateContainer = 'content' in template ? template.content : template;
//   var imageElement = templateContainer.querySelector('a').cloneNode(true);
//
//   imageElement.querySelector('.picture-comments').textContent = image.comments;
//   imageElement.querySelector('.picture-likes').textContent = image.likes;
//
//   var backgroundImage = new Image(182, 182);
//   backgroundImage.src = image.preview ? image.preview : image.url;
//
//   backgroundImage.onload = function() {
//     imageElement.querySelector('img').src = image.preview ? image.preview : image.url;
//   };
//   backgroundImage.onerror = function() {
//     imageElement.classList.add('picture-load-failure');
//   };
//   imageElement.onclick = function(event) {
//     gallery.show(itemCounter);
//     event.preventDefault();
//   };
//   return imageElement;
// }
//
// module.exports = getImageElement;

var Picture = function(image, element, itemCounter) {
  var that = this;
  this.data = image;
  this.element = element;
  this.element.querySelector('.picture-comments').textContent = this.data.comments;
  this.element.querySelector('.picture-likes').textContent = this.data.likes;

  var backgroundImage = new Image(182, 182);
  backgroundImage.src = this.data.preview ? this.data.preview : this.data.url;

  backgroundImage.onload = function() {
    this.element.querySelector('img').src = this.data.preview ? this.data.preview : this.data.url;
  };
  backgroundImage.onerror = function() {
    this.element.classList.add('picture-load-failure');
  };
  this.element.onclick = function(event) {
    gallery.show(itemCounter);
    event.preventDefault();
  };
  // element.onclick = null;
  return this.element;

};

module.exports = Picture;
