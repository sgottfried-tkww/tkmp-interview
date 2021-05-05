import { Attribute, AttributeArrayElement, Attributes, AttributeType, Line, LineArrayElement, LineElement, LineType } from '../types';

export const isLink = (unknown: AttributeType): unknown is Attribute =>
  typeof unknown !== 'string' && !!(unknown as Attribute).url;

export const isString = (unknown: Attributes): unknown is string =>
  typeof unknown === 'string';

export const isLineTypeArray = (unknown: LineType[] | LineType): unknown is LineType[] =>
  Array.isArray(unknown);

export const isLineArray = (unknown: LineType): unknown is LineArrayElement[] =>
  Array.isArray(unknown);

export const isAttributeArray = (unknown: Attributes): unknown is AttributeArrayElement[] =>
  Array.isArray(unknown);

export const isLine = (unknown: LineElement): unknown is Line =>
  !!(unknown as Line).attribute;
