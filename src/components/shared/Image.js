import React from 'react';
import { string } from 'prop-types';

const Image = ({ src, alt = '' }) => (
  <img className="img-fluid" src={src} alt={alt} />
);

Image.propTypes = {
  src: string.isRequired,
  alt: string
};

export default Image