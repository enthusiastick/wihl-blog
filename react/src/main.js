import 'babel-polyfill';
import renderEssay from './renderEssay';

$(function() {
  let reactEssayElement = document.getElementById(
    'essay-show'
  );
  if (reactEssayElement) {
    renderEssay(reactEssayElement);
  }
});
