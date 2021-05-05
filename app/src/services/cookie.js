import { COOKIE_UNIQUE_KEY } from '../settings';

const keyToUnique = (key) => `${COOKIE_UNIQUE_KEY}${key}`;

const read = (key) => {
  const cookies = document.cookie.split(';').map((c) => {
    const raw = c.trim().split('=');
    return {
      key: raw[0],
      value: raw[1],
    }
  });
  const cookie = cookies.find((c) => c.key === keyToUnique(key));

  if (cookie) {
    return cookie.value;
  }

  return null;
}

const write = (key, value, listener) => {
  const date = new Date();
  const expires = date.toUTCString();
  const cookie = `${keyToUnique(key)}=${value}; expires=${expires};`;

  document.cookie = cookie;

  if (listener) {
    listener({
      key,
      value,
    });
  }
};

const valueToBoolean = (value) => {
  switch (value) {
    case 'true': {
      return true
    }
    case 'false': {
      return false
    }
    default: {
      return null
    };
  }
};

const cookie = {
  read,
  write,
  valueToBoolean,
};

export default cookie;
