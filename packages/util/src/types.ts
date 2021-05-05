export type HasUUID<T> = T & {
  uuid: string
}

export interface Attribute {
  text: string;
  italics?: boolean;
  small?: boolean;
  url?: string;
}

export type AttributeArrayElement = HasUUID<Attribute>;
export type AttributeElement = Attribute | string;
export type Attributes = AttributeElement | AttributeArrayElement[];
export type AttributeType = AttributeElement | AttributeArrayElement;

export interface Line {
  attribute: Attributes;
};

export type LineArrayElement = HasUUID<Line> | HasUUID<Attribute>;
export type LineElement = Line | Attribute | string;
export type LineType = LineArrayElement[] | LineElement

export interface TextType {
  line: LineType;
};
