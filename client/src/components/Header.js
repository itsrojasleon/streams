import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="header item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
}
export default Header;
