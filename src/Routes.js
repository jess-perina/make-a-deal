import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './App';
import Win from './Win';
import Lose from './Lose';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/win' component={Win} />
          <Route path='/lose' component={Lose} />
          <Route path='/' component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;