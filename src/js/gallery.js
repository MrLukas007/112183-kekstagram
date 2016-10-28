'use strict';
var Gallery = new function() {
  this.element = document.querySelector('.gallery-overlay');
  this.closeGallery = document.querySelector('.gallery-overlay-close');
  this.elementImage = document.querySelector('.gallery-overlay-image');
  this.activePicture;
  this.pictures = [];
  var that = this;
};
Gallery.prototype = {
  setPictures: function(pictures) {
    this.pictures = pictures;
  },
  show: function(number) {
    this.number = number;
    this.element.onclick = function() {
      if (number = this.pictures.length - 1) {
        this.setActivePicture (0);
      } else {
        this.setActivePicture (number + 1);
      }
    };
    that.closeGallery.onclick = hide();
    that.elementImage.onclick = function() {

    };
    this.element.classList.remove('invisible');
    this.setActivePicture (this.number);
  },
  hide: function() {
    this.element.classList.add('invisible');
    that.element.onclick = null;
    that.closeGallery.onclick = null;
    that.elementImage.onclick = null;
  },
  setActivePicture: function(number) {
    this.activePicture = number;
    this.pictures[number].src = that.pictures[number].querySelector('img').src;
    this.pictures[number].textContent = that.pictures[number].querySelector('.picture-comments').textContent;
    this.pictures[number].textContent = that.pictures[number].querySelector('.picture-likes').textContent;
  }
};

module.exports = new Gallery();
