import React from 'react';

const Button = ({ isLink, classNames, newTab, link, text, buttonClick }) => {
  const classes = `${classNames} inline-block bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 my-4 border border-blue-500 hover:border-transparent`;
  const target = newTab !== false ? 'blank' : '';

  if (isLink) {
    return (
      <a
        className={classes}
        href={link}
        target={target}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={buttonClick}
    >
      {text}
    </button>
  );
};

export default Button;
