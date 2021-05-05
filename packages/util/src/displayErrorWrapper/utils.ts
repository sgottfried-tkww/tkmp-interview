import { ErrorInfo } from 'react';

const trimLineNumbers = (path: string): string => {
  const splits = path.split(':');
  if (splits.length < 3) {
    return path;
  }
  const lastTwo = [splits[splits.length - 1], splits[splits.length - 2]]
  if (lastTwo.every((item) => !Number.isNaN(item))) {
    return splits
      .slice(0, splits.length - 2)
      .join(':');
  }
  return path;
}

const splitLocation = (stack: string[]) =>
  stack
    .map(
      (stackCall) =>
        stackCall
          .split('(')
          .map(
            (callItem) => {
              const base = callItem.endsWith(')') ?
                callItem.substring(0, callItem.length - 1) :
                callItem
              const path = base.replace('webpack-internal:///', '')
              return trimLineNumbers(path);
            }
          )
    )
    .filter(
      (stackCall) =>
        stackCall.length === 1 || !stackCall[1].includes('displayErrorWrapper'),
    );


export const showLink = (stackCall: string[]): boolean => stackCall.length > 1 && showVSCodeLink(stackCall[1]) && !!dirName()
export const dirName = () => process.env.DIRNAME || process.env.REACT_APP_DIRNAME || null;
const showVSCodeLink = (path: string) => !path.includes('node_modules') && !path.includes('http://') && !path.includes('https://');

export const join = (...segments: string[]) => {

  let parts: string[] = [];
  for (var i = 0, l = segments.length; i < l; i++) {
    parts = parts.concat(segments[i].split('/'));
  }

  const newParts = [];

  for (i = 0, l = parts.length; i < l; i++) {
    const part = parts[i];
    if (!part || part === '.') {
      continue;
    }

    if (part === '..') {
      newParts.pop();
      continue;
    }

    newParts.push(part);
  }

  if (parts[0] === '') {
    newParts.unshift('');
  }

  return newParts.join('/') || (newParts.length ? '/' : '.');
}

export const prepareCallStack = (error: Error | null): string[][] => {
  if (!error || !error.stack) {
    return [];
  }
  const callStack = error.stack.split('\n');
  callStack.shift();
  return splitLocation(callStack);
};

export const prepareComponentStack = (errorInfo: ErrorInfo | null): string[][] => {
  if (!errorInfo) {
    return [];
  }
  const componentStack = errorInfo.componentStack
    .split('\n')
    .map((item) => item.trim())
    .filter((item) => item !== '' && !item.startsWith('at ErrorBoundary'))
  return splitLocation(componentStack);
}