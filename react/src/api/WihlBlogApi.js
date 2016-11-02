import humps from 'humps';

class WihlBlogApi {

  static fetchEssay(slug) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `/api/v1/essays/${slug}`,
        dataType: 'json'
      })
      .done(data => {
        let camelizedData = humps.camelizeKeys(data);
        resolve(camelizedData);
      })
      .fail(data => {
        reject();
      })
    });
  }

  static fetchEssays() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `/api/v1/essays`,
        dataType: 'json'
      })
      .done(data => {
        let camelizedData = humps.camelizeKeys(data);
        resolve(camelizedData);
      })
      .fail(data => {
        reject();
      })
    })
  }

export default WihlBlogApi;
