import humps from 'humps';
import wihlBlogUrl from '../../constants/wihlBlogUrl';

  let fetchEssays = () => {
    return fetch(`${wihlBlogUrl}/api/v1/essays`)
    .then(response => {
      let { ok, status, statusText } = response;
      if (ok) {
        return response.json();
      } else {
        let error = new Error(`fetchEssays: ${status} (${statusText})`);
        throw(error);
      }
    })
    .then(data => {
      let camelizedData = humps.camelizeKeys(data);
      return camelizedData;
    });
  }

export default fetchEssays;
