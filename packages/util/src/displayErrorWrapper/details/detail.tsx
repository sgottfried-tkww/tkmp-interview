import React, { FunctionComponent } from 'react';
import Links from '../links';

interface DetailProps {
  stack: string[][];
  name: string;
}

const Detail: FunctionComponent<DetailProps> = (props) => {
  const { name, stack } = props;

  return (
    <div className="error-details-stack">
      <div className="error-details-stack-title">
        {name} Stack
      </div>
      <div className="error-details-stack-content">
        {stack.map((stackCall, index) =>
          <div key={`${stackCall}-${index}`}>
            {stackCall.map((item, index) => {
              return (
                <div
                  key={`${item}-${index}`}
                  className="error-details-stack-item"
                >
                  <div
                    className={`${index === 0 ? 'error-details-stack-root' : 'error-details-stack-indent'}`}
                  >
                    {item}
                  </div>
                  {index !== 0 &&
                    <Links stackCall={stackCall} />
                  }
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
