import React from 'react';
import Essay from './Essay';

const Essays = ({ essaysById }) => {

  let blogEssays = Object.keys(essaysById).map((id => {
    return (
      <div key={id}>
        <Essay
          essay={essaysById[id]}
        />
        <hr/ >
      </div>
    )
  }));

  return (
    <div>
      {blogEssays}
    </div>
  );
}

export default Essays;
