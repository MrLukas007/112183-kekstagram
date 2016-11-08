'use strict';
var load = function(url, renderProperties, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function(evt) {
    var loadedData = JSON.parse(evt.target.response);
    callback(loadedData);
  };
  xhr.open('GET', url + '?filter=' + renderProperties.filter + '&from=' + renderProperties.from + '&to=' + renderProperties.to);
  xhr.send();
};
module.exports = load;
