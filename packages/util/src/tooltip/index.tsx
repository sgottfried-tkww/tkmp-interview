import React, { FunctionComponent } from 'react';
import '../../assets/styles/tooltip.css';
import type { HasUUID, TextType } from '../types';
import Text from './text';

interface TooltipProps {
  text: TextType | HasUUID<TextType>[]
}


const Tooltip: FunctionComponent<TooltipProps> = (props) => {
  const { text, children } = props;

  return (
    <div className="tooltip">
      {children}
      <span className="tooltip-container">
        {Array.isArray(text) ?
          text.map((item) =>
            <Text key={item.uuid} line={item.line} />
          )
          :
          <Text line={text.line} />
        }
      </span>
    </div>
  );
};

export default Tooltip;
