'use strict';
var Gallery = new function() {
  this.element = document.querySelector('.gallery-overlay');
  this.closeGallery = document.querySelector('.gallery-overlay-close');
  this.elementImage = document.querySelector('.gallery-overlay-image');
  this.activePicture;
  this.pictures = [];
  var self = this;
};
Gallery.prototype = {
  setPictures: function(pictures) {
    this.pictures = pictures;
  },
  show: function(number) {
    this.number = number;
    this.element.onclick = function() {
      if (number = this.pictures[pictures.length - 1]) {
        this.setActivePicture (this.pictures[0]);
      } else {
        this.setActivePicture (number + 1);
      }
    };
    self.closeGallery.onclick = hide();
    self.elementImage.onclick = function() {

    };
    this.element.classList.remove('invisible');
    this.setActivePicture (number);
  },
  hide: function() {
    this.element.classList.add('invisible');
    self.element.onclick = null;
    self.closeGallery.onclick = null;
    self.elementImage.onclick = null;
  },
  setActivePicture: function(number) {
    this.activePicture = number;
    self.element.querySelector('img').src = self.pictures[number].querySelector('img').src;
    self.element.querySelector('.likes-count').textContent = self.pictures[number].querySelector('.picture-comments').textContent;
    self.element.querySelector('.comments-count').textContent = self.pictures[number].querySelector('.picture-likes').textContent;
  }
};

var galleryEl = new Gallery;
galleryEl.pictures = document.querySelectorAll('.pictures .picture');
