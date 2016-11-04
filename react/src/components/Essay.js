import React from 'react';
import blogMarkdownParser from '../utilities/blogMarkdownParser';

const Essay = ({ essay }) => {

  let markdownParsedbody = blogMarkdownParser(essay.body);
  let renderedHTML = { __html: markdownParsedbody };

  return (
    <div className="row">
      <div className="small-10 medium-5 small-centered columns">
        <h1>
          <a href={essay.slug}>
            {essay.title}
          </a>
        </h1>
        <p>
          Posted by&nbsp;
          <strong>
            {essay.author}&nbsp;
          </strong>
          on {essay.publicationDate}
        </p>
        <div dangerouslySetInnerHTML={renderedHTML} />
      </div>
    </div>
  );
}

export default Essay;
