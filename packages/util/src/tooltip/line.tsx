import React, { Fragment, FunctionComponent } from 'react';
import type { Attributes } from '../types';
import { isAttributeArray } from '../utils/guards';
import Attribute from './attribute';

interface LineProps {
  attribute: Attributes;
}

const Line: FunctionComponent<LineProps> = (props) => {
  const { attribute } = props;

  return (
    <Fragment>
      {isAttributeArray(attribute) ?
        <Fragment>
          {attribute.map((item) =>
            <Attribute key={item.uuid} item={item} />
          )}
        </Fragment>
        :
        <Attribute item={attribute} />
      }
    </Fragment>
  );
};

export default Line;
