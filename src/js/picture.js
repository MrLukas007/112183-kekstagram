'use strict';
var gallery = require('./gallery');
// Отрисовка одного элемента
var getImageElement = function(image, itemCounter) {
  var template = document.querySelector('template');
  var templateContainer = 'content' in template ? template.content : template;
  var imageElement = templateContainer.querySelector('a').cloneNode(true);

  imageElement.querySelector('.picture-comments').textContent = image.comments;
  imageElement.querySelector('.picture-likes').textContent = image.likes;

  var backgroundImage = new Image(182, 182);
  backgroundImage.src = image.preview ? image.preview : image.url;

  backgroundImage.onload = function() {
    imageElement.querySelector('img').src = image.preview ? image.preview : image.url;
  };
  backgroundImage.onerror = function() {
    imageElement.classList.add('picture-load-failure');
  };
  imageElement.onclick = function() {
    gallery.show(itemCounter);
  }
  return imageElement;
};

module.exports = getImageElement;
