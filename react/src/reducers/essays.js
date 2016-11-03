import {
  FETCH_ESSAY_REQUEST,
  FETCH_ESSAY_REQUEST_FAILURE,
  FETCH_ESSAY_REQUEST_SUCCESS,
  FETCH_ESSAYS_REQUEST,
  FETCH_ESSAYS_REQUEST_FAILURE,
  FETCH_ESSAYS_SUCCESS
} from '../actions/essays';

const initialState = {
  byId: {},
  byName: {},
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
      let essayByName = { [action.essay.name]: action.essay };
      let nextById = Object.assign({}, state.byId, essayById);
      let nextByName = Object.assign({}, state.byName, essayByName)

      return Object.assign({}, state, {
        byId: nextById,
        byName: nextByName,
        isFetchingEssay: false
      });
    case FETCH_ESSAYS_REQUEST:
      return Object.assign({}, state, {
        isFetchingEssays: true
      });
    case FETCH_ESSAYS_FAILURE:
      return Object.assign({}, state, {
        isFetchingEssays: false
      });
    case FETCH_ESSAYS_REQUEST_SUCCESS:

      let essaysIds = action.essays.reduce((previousValue, currentValue) => {
        let newValue = { [currentValue.id]: currentValue
        };
        return Object.assign(previousValue, newValue)
      }, {});

      let essaysNames = action.essays.reduce((previousValue, currentValue) => {
        let newValue = { [currentValue.name]: currentValue}
        return Object.assign(previousValue, newValue)
      }, {});

      let nextEssaysById = Object.assign({}, state.byId, essaysIds);
      let nextEssaysByName = Object.assign({}, state.byName, essaysNames);
      return Object.assign({}, state, {
        byId: nextEssaysById,
        byName: nextEssaysByName,
        isFetchingEssays: false
      });
    default:
      return state;
  }
};

export default essays;
