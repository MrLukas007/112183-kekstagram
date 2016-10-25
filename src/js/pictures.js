'use strict';

(module.exports = function () {
  var filter = document.querySelector('.filters');
  filter.classList.add('hidden');

//Отрисовка списка
  var container = document.querySelector('.pictures');
  var renderImages = function(images) {
    images.forEach(function(image) {
      container.appendChild(getImageElement(image));
    });
  };
  var url = 'http://localhost:1507/api/pictures?callback=createCallback';
  load(url, renderImages);
}) ();




