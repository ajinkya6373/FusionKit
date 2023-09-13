import React from 'react';
import './badge.css';

function Badge({ text, variant }) {
  const badgeClasses = `badge ${variant}`;

  return (
    <span className={badgeClasses}>
      {text}
    </span>
  );
}

export default Badge;
