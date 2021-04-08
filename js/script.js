const body = document.querySelector('body'),
      form = document.querySelector('input');

const hexNumberGenerator = () =>
    Math.floor(Math.random() * 16).toString(16).toUpperCase();

const hexColorGenerator = () =>
    '#' + Array.from({length: 6}).map(hexNumberGenerator).join('');

const newColor = hexColorGenerator();

body.style.backgroundColor = newColor;
form.value = newColor;