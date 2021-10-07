import React from 'react';
import './Header.scss';

const languages = ['EN', 'UA', 'RU'];

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__img">
        <img src="./images/logo.png" alt="logo" />
        <ul className="header__languages">
          {languages.map(item => (
            <li key={item} className="header__language">{item}</li>
          ))}
        </ul>
      </div>
      <div className="header__text" data-content="logo">logo</div>
      <div className="header__menu"></div>
    </header>
  );
};
