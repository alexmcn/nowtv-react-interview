import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({src, name}) => {
  if (!src) return null;

  return(
    <img src={src} alt={name} />
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
}

export default Avatar;
