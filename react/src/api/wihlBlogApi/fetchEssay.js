import humps from 'humps';
import wihlBlogUrl from '../../constants/wihlBlogUrl';

  let fetchEssay = (slug) => {
    return fetch(`${wihlBlogUrl}/api/v1/essays/${slug}`)
    .then(response => {
      let { ok, status, statusText } = response;
      if (ok) {
        return response.json();
      } else {
        let error = new Error(`fetchEssay: ${status} (${statusText})`);
        throw(error);
      }
    })
    .then(data => {
      let camelizedData = humps.camelizeKeys(data);
      return camelizedData;
    })
    .catch(error => { return error })
  }

export default fetchEssay;
