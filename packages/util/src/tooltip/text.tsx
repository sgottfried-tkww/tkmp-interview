import React, { Fragment, FunctionComponent } from 'react';
import type { LineType } from '../types';
import { isLine, isLineArray } from '../utils/guards';
import Line from './line';

interface TextProps {
  line: LineType;
}

const Text: FunctionComponent<TextProps> = (props) => {
  const { line } = props;

  return (
    <div className="tooltip-text">
      {isLineArray(line) ?
        line.map((lineItem) => {
          if (isLine(lineItem)) {
            return (
              <Line
                key={lineItem.uuid}
                attribute={lineItem.attribute}
              />
            )
          }
          return (
            <Line
              key={lineItem.uuid}
              attribute={lineItem}
            />
          )
        })
        :
        <Fragment>
          {isLine(line) ?
            <Line attribute={line.attribute} />
            :
            <Line attribute={line} />
          }
        </Fragment>
      }
    </div >
  );
};

export default Text;
