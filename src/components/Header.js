import React from 'react';
import hamburger from '../images/menu.svg';
import plus from '../images/plus.svg';
import help from '../images/help.svg';

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img className="hamburger" src={hamburger} alt="icon" />
        <span className="tasky">Tasky</span>
      </div>
      <div className="header-right">
        <img className="plus" src={plus} alt="new task" />
        <img className="help" src={help} alt="help" />
      </div>
    </div>
  );
}

export default Header;
