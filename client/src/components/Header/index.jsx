import React from 'react';
import logoImage from './controller.png'; // Placeholder
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

const Header = () => {
  return (
    <header className="header is-shadow">
      <div className="navbar-brand">
        <img src={logoImage} alt="logo" />
        <Link to="/" className="logo navbar-item has-text-weight-bold is-size-3">IGR</Link>
        <div className="btns navbar-end">
        <LoginModal />
        <SignUpModal />
        </div>
      </div>
    </header>
  );
}

export default Header;
