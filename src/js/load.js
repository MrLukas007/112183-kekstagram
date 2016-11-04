'use strict';
var load = function(url, callback, filter, from, to) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function(evt) {
    var loadedData = JSON.parse(evt.target.response);
    callback(loadedData);
  };
  xhr.open('GET', url + '?filter=' + filter);
  xhr.send();
};
module.exports = load;
