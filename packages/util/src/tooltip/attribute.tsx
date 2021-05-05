import React, { FunctionComponent } from 'react';
import type { AttributeType } from '../types';
import getFormat from '../utils/getFormat';
import { isLink } from '../utils/guards';

interface AttributeProps {
  item: AttributeType;
}

const Attribute: FunctionComponent<AttributeProps> = (props) => {
  const { item } = props;

  const navigate = () => {
    if (isLink(item)) {
      window.open(item.url);
    }
  };

  return (
    <div className={`tooltip-attribute ${getFormat(item)}`}>
      {typeof item === 'string' ?
        <div className="tooltip-text">
          {item}
        </div>
        :
        <div
          className={item.url ? 'tooltip-link' : 'tooltip-text'}
          onClick={navigate}
        >
          {item.text}
        </div>
      }
    </div>
  );
};

export default Attribute;
