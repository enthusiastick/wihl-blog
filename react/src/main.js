import 'babel-polyfill';
import render from './render';

$(function() {
  let reactCurriculumNavigatorElement = document.getElementById(
    'react-curriculum-navigator'
  );
  if (reactCurriculumNavigatorElement) {
    render(reactCurriculumNavigatorElement);
  }
});
