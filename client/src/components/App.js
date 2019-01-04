import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function Home() {
  return <div>Home</div>
}

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  )
}
export default App;