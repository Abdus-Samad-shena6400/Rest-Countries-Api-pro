import React from 'react'

const Header = ({ theme = 'light', toggleTheme }) => {
  const isDark = theme === 'dark'

  return (
    <header className="main-header-container">
      <div className="header-container">
        <h2>Where in the world?</h2>
        <p className="theme-changer" onClick={toggleTheme} style={{ userSelect: 'none' }}>
          <i className={isDark ? "fa-solid fa-sun" : "fa-regular fa-moon"} />&nbsp;&nbsp; {isDark ? 'Light Mode' : 'Dark Mode'}
        </p>
      </div>
    </header>
  )
}

export default Header