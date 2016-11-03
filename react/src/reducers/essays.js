import {
  FETCH_ESSAY_REQUEST,
  FETCH_ESSAY_REQUEST_FAILURE,
  FETCH_ESSAY_REQUEST_SUCCESS,
  FETCH_ESSAYS_REQUEST,
  FETCH_ESSAYS_REQUEST_FAILURE,
  FETCH_ESSAYS_REQUEST_SUCCESS
} from '../actions/essays';

const initialState = {
  byId: {},
  bySlug: {},
  isFetchingEssays: false,
  isFetchingEssay: false
};

let essays = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ESSAY_REQUEST:
      return Object.assign({}, state, {
        isFetchingEssay: true
      });
    case FETCH_ESSAY_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetchingEssay: false
      });
    case FETCH_ESSAY_REQUEST_SUCCESS:
      let essayById = { [action.essay.id]: action.essay };
      let essayBySlug = { [action.essay.slug]: action.essay };
      let nextById = Object.assign({}, state.byId, essayById);
      let nextBySlug = Object.assign({}, state.bySlug, essayBySlug)

      return Object.assign({}, state, {
        byId: nextById,
        bySlug: nextBySlug,
        isFetchingEssay: false
      });
    case FETCH_ESSAYS_REQUEST:
      return Object.assign({}, state, {
        isFetchingEssays: true
      });
    case FETCH_ESSAYS_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetchingEssays: false
      });
    case FETCH_ESSAYS_REQUEST_SUCCESS:

      let essaysIds = action.essays.reduce((previousValue, currentValue) => {
        let newValue = { [currentValue.id]: currentValue
        };
        return Object.assign(previousValue, newValue)
      }, {});

      let essaysSlugs = action.essays.reduce((previousValue, currentValue) => {
        let newValue = { [currentValue.slug]: currentValue}
        return Object.assign(previousValue, newValue)
      }, {});

      let nextEssaysById = Object.assign({}, state.byId, essaysIds);
      let nextEssaysBySlug = Object.assign({}, state.bySlug, essaysSlugs);
      return Object.assign({}, state, {
        byId: nextEssaysById,
        bySlug: nextEssaysBySlug,
        isFetchingEssays: false
      });
    default:
      return state;
  }
};

export default essays;
