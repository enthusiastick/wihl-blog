import fetchEssay from './wihlBlogApi/fetchEssay';
import fetchEssays from './wihlBlogApi/fetchEssays';

class WihlBlogApi {

  static fetchEssay(slug) {
    return fetchEssay(slug);
  }

  static fetchEssays() {
    return fetchEssays();
  }

}

export default WihlBlogApi;
