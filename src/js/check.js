'use strict';
function getMessage(a, b) {
  var stringResult = "";
  // Если первый аргумент, имеет тип boolean
  if (typeof a === "boolean") {
    if (a == true) {
      stringResult = "Переданное GIF-изображение анимировано и содержит " + b + " кадров"
    } else {
      stringResult = "Переданное GIF-изображение не анимировано";
    }
    // Если первый аргумент имеет числовой тип
  } else if (typeof a === "number") {
    stringResult = "Переданное SVG-изображение содержит " + a + " объектов и " + b * 4 + " атрибутов";
  }
  // Если оба аргумента массивы
  else if (Array.isArray(a) === true && Array.isArray(b) === true) {
    var artifactsSquare = 0;
    for (var i = 0; i < a.length; i++) {
      artifactsSquare += a[i] * b[i];
    }
    stringResult = "Общая площадь артефактов сжатия: " + artifactsSquare + " пикселей"
  }
  // Если первый аргумент массив
  else if (Array.isArray(a) === true) {
    var amountOfRedPoints = 0;
    for (var i = 0; i < a.length; i++) {
      amountOfRedPoints += a[i];
    }
    stringResult = "Количество красных точек во всех строчках изображения: " + amountOfRedPoints;
  }
  // Все остальные случаи
  else {
    stringResult = "Переданы некорректные данные";
  }
  return stringResult;
}

