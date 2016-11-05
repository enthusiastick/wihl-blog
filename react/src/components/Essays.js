import React from 'react';
import Essay from './Essay';

const Essays = ({ essaysById }) => {

  let blogEssays = Object.keys(essaysById).reverse().map((id => {
    return (
      <div key={id}>
        <Essay
          essay={essaysById[id]}
        />
        <hr />
      </div>
    )
  }));

  return (
    <div>
      <hr />
      {blogEssays}
    </div>
  );
}

export default Essays;
