import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MapPage from './pages/map';
import ChartPage from './pages/chart';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MapPage} />
          <Route path="/chart" exact component={ChartPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
