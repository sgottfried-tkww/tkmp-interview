import type { AttributeType } from '../types';

const getTooltipText = (line: string | AttributeType): string => {
  if (typeof line === 'string') {
    return line;
  }

  return line.text;
};

export default getTooltipText;
