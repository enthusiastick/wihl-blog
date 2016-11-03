import React from 'react';

const Essay = ({ essay, essaySlug }) => {

  return (
    <div>
      <h1>
        {essay.title}
      </h1>
    </div>
  );
}

export default Essay;
