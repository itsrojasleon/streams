import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
      </div>
    </header>
  );
}
export default Header;