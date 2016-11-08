let wihlBlogUrl;

switch (process.env.NODE_ENV) {
  case 'production':
    wihlBlogUrl = 'https://prelude.whatishouselight.com'
    break;
  default:
    wihlBlogUrl = 'http://localhost:3000'
}

export default wihlBlogUrl;
