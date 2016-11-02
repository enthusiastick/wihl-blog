import WihlBlogApi from '../api/WihlBlogApi';

const FETCH_ESSAY_REQUEST = "FETCH_ESSAY_REQUEST";
const FETCH_ESSAY_REQUEST_SUCCESS = "FETCH_ESSAY_REQUEST_SUCCESS";
const FETCH_ESSAY_REQUEST_FAILURE = "FETCH_ESSAY_REQUEST_FAILURE";

const FETCH_ESSAYS_REQUEST = "FETCH_ESSAYS_REQUEST";
const FETCH_ESSAYS_REQUEST_SUCCESS = "FETCH_ESSAYS_REQUEST_SUCCESS";
const FETCH_ESSAYS_REQUEST_FAILURE = "FETCH_ESSAYS_REQUEST_FAILURE";
FETCH_ESSAYS_REQUEST_FAILURE
export {
  FETCH_ESSAY_REQUEST,
  FETCH_ESSAY_REQUEST_SUCCESS,
  FETCH_ESSAY_REQUEST_FAILURE,
  FETCH_ESSAYS_REQUEST,
  FETCH_ESSAYS_REQUEST_SUCCESS,
  FETCH_ESSAYS_REQUEST_FAILURE
};

let fetchEssayRequest = () => {
  return {
    type: FETCH_ESSAY_REQUEST
  };
};

let fetchEssayRequestSuccess = data => {
  return {
    type: FETCH_ESSAY_REQUEST_SUCCESS,
    essay: data.essay
  };
};

let fetchEssayRequestFailure = () => {
  return {
    type: FETCH_ESSAY_REQUEST_FAILURE
  };
};

let fetchEssay = (slug) => dispatch => {
  dispatch(fetchEssayRequest());
  return EventHorizonApi.fetchEssay(slug)
  .then(
    data => dispatch(fetchEssayRequestSuccess(data)),
    () => dispatch(fetchEssayRequestFailure())
  );
};

let fetchEssaysRequest = () => {
  return {
    type: FETCH_ESSAYS_REQUEST
  };
};

let fetchEssaysRequestSuccess = data => {
  return {
    type: FETCH_ESSAYS_REQUEST_SUCCESS,
    essays: data.essays
  };
};

let fetchEssaysRequestFailure = () => {
  return {
    type: FETCH_ESSAYS_REQUEST_FAILURE
  };
};

let fetchEssays = (teamSlug) => dispatch => {
  dispatch(fetchEssaysRequest());
  return EventHorizonApi.fetchEssays()
  .then(
    data => dispatch(fetchEssaysRequestSuccess(data)),
    () => dispatch(fetchEssaysRequestFailure())
  );
};

export {
  fetchEssay,
  fetchEssayRequest,
  fetchEssayRequestSuccess,
  fetchEssayRequestFailure,
  fetchEssays,
  fetchEssaysRequest,
  fetchEssaysRequestSuccess,
  fetchEssaysRequestFailure
};