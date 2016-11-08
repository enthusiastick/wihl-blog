import fetchEssay from './WihlBlogApi/fetchEssay';
import fetchEssays from './WihlBlogApi/fetchEssays';

class WihlBlogApi {

  static fetchEssay(slug) {
    return fetchEssay(slug);
  }

  static fetchEssays() {
    return fetchEssays();
  }

}

export default WihlBlogApi;
