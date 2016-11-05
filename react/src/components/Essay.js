import React from 'react';
import blogMarkdownParser from '../utilities/blogMarkdownParser';

const Essay = ({ essay }) => {

  let markdownParsedbody = blogMarkdownParser(essay.body);
  let renderedHTML = { __html: markdownParsedbody };

  return (
    <div className="row">
      <div className="small-11 medium-7 small-centered columns">
        <h1 className="text-center">
          <a href={essay.slug}>
            {essay.title}
          </a>
        </h1>
        <h4 className="text-center">
          Posted by&nbsp;
          <strong>
            {essay.author}&nbsp;
          </strong>
          on {essay.publicationDate}
        </h4>
        <div dangerouslySetInnerHTML={renderedHTML} />
      </div>
    </div>
  );
}

export default Essay;
