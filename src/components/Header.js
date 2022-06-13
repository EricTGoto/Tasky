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
    <header className="header">
      <div className="header-left">
        <input type="image" className="hamburger" src={hamburger} alt="icon" onClick={toggleSidebar} />
        <span className="tasky">Tasky</span>
      </div>
      <div className="header-right">
        <input type="image" className="plus" src={plus} onClick={openForm} alt="new task" />
        <input type="image" className="help" src={help} alt="help" />
      </div>
    </header>
  );
}

export default Header;
