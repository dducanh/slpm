import React from 'react';
import { Message } from './errorMessage.style';
import PropsTypes from 'prop-types';

export default function ErrorMessage({ errors, name }) {
  const error = errors[name];
  return error && <Message>{error.message}</Message>;
}

// use propstype to handle type of props
ErrorMessage.prototype = {
  errors: PropsTypes.object,
  name: PropsTypes.string
};
