import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

function Header() {
  return (
    <header>
      <Link to="/">
        Streamy
      </Link>
      <div>
        <Link to="/">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </header>
  );
}
export default Header;