import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/index.css';

// ======== ENDPOINTS ==========

import App from './components/App';
import BaseLayout from './components/BaseLayout';

import Shop from './components/Shop'
import ShowShop from './components/ShowShop';

import About from './components/About';

import Craft from './components/Craft';
import ShowCraft from './components/ShowCraft';

import Inventory from './components/Inventory';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/inventory" component={Inventory} />
        <Route path="/craft/:id" component={ShowCraft} />
        <Route path="/craft" component={Craft} />
        <Route path="/about" component={About} />
        <Route path="/shop/:id" component={ShowShop} />
        <Route path="/shop" component={Shop} />
        <Route path='/' component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
