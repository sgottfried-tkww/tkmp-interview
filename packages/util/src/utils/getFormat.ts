import { AttributeType } from '../types';
import { isString } from '../utils/guards';

const getFormat = (attribute: AttributeType): string => {
  if (typeof attribute === 'string') {
    return '';
  }

  if (isString(attribute)) {
    return '';
  }

  let classNames = '';

  if (attribute.italics) {
    classNames = `${classNames} tooltip-italic`;
  }

  if (attribute.small) {
    classNames = `${classNames} tooltip-small`;
  }

  return classNames;
};

export default getFormat;
