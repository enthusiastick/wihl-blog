import 'babel-polyfill';
import 'whatwg-fetch';
import renderBlog from './renderBlog';

$(function() {
  let reactEssayElement = document.getElementById(
    'essay-show'
  );
  if (reactEssayElement) {
    renderBlog(reactEssayElement);
  }
  let reactEssaysElement = document.getElementById(
    'essays-index'
  );
  if (reactEssaysElement) {
    renderBlog(reactEssaysElement);
  }
});
