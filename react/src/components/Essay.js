import React from 'react';

const Essay = ({ essay }) => {

  return (
    <div>
      <h1>
        {essay.title}
      </h1>
      <p>
        <strong>
          Posted By:
        </strong>
        &nbsp;{essay.author}
      </p>
      <div>
        {essay.body}
      </div>
    </div>
  );
}

export default Essay;
