import marked from 'marked';
import React from 'react';
import ReactDomServer from 'react-dom/server';

let blogMarkdownParser = body => {
  let markdownParsedBody = marked(body);
  return markdownParsedBody;
}

export default blogMarkdownParser;
