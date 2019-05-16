import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header';

// import history from '../history';

const StreamCreate = lazy(() => import('./streams/StreamCreate'));
const StreamDelete = lazy(() => import('./streams/StreamDelete'));
const StreamEdit = lazy(() => import('./streams/StreamEdit'));
const StreamList = lazy(() => import('./streams/StreamList'));
const StreamShow = lazy(() => import('./streams/StreamShow'));

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={StreamList} />
              <Route exact path="/streams/new" component={StreamCreate} />
              <Route path="/streams/edit/:id" component={StreamEdit} />
              <Route path="/streams/delete/:id" component={StreamDelete} />
              <Route path="/streams/:id" component={StreamShow} />
            </Switch>
          </Suspense>
        </>
      </BrowserRouter>
    </div>
  );
}
export default App;
