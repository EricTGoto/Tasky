import React from 'react';
import hamburger from '../images/menu.svg';
import plus from '../images/plus.svg';
import help from '../images/help.svg';

function Header({ setShowSidebar }) {
  function openForm(e) {
    console.log(e);
  }

  function toggleSidebar() {
    setShowSidebar((prevSidebar) => !prevSidebar);
  }

  return (
    <div className="header">
      <div className="header-left">
        <img className="hamburger" src={hamburger} alt="icon" onClick={toggleSidebar} role="presentation" />
        <span className="tasky">Tasky</span>
      </div>
      <div className="header-right">
        <img className="plus" src={plus} onClick={openForm} role="presentation" alt="new task" />
        <img className="help" src={help} alt="help" />
      </div>
    </div>
  );
}

export default Header;
