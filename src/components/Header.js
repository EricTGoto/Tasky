import React from 'react';
import hamburger from '../images/menu.svg';
import plus from '../images/plus.svg';
import help from '../images/help.svg';

function Header({ setShowMenus }) {
  function toggleSidebar() {
    setShowMenus((prevShowMenus) => {
      return {
        ...prevShowMenus,
        sidebar: !prevShowMenus.sidebar,
      };
    });
  }

  function openForm() {
    setShowMenus((prevShowMenus) => {
      return {
        ...prevShowMenus,
        taskForm: !prevShowMenus.taskForm,
      };
    });
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
