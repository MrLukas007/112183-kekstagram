'use strict';

var filter = document.querySelector('.filters');
filter.classList.add('hidden');

var container = document.querySelector('.pictures');
var template = document.querySelector('template');
var templateContainer = 'content' in template ? template.content : template;
var getImageElement = function(image) {
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
  return imageElement;
};

var renderImages = function(images) {
  images.forEach(function(image) {
    container.appendChild(getImageElement(image));
  });
};

var url = 'http://localhost:1507/api/pictures?callback=createCallback';

var scriptRequest = function(urll, callback) {
  var script = document.createElement('script');
  script.src = urll;
  document.body.appendChild(script);
  window.createCallback = function(data) {
    callback(data);
  };
};
scriptRequest(url, renderImages);
