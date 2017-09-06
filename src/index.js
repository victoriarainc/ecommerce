import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/index.css';

import App from './components/App';
import BaseLayout from './components/BaseLayout';
import Shop from './components/Shop'
import About from './components/About';
import Craft from './components/Craft';
import Cards from './components/Cards';
import Stationery from './components/Stationery';
import Singles from './components/Singles';
import ShowCraft from './components/ShowCraft';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/craft/:id" component={ShowCraft} />
        <Route path="/craft" component={Craft} />
        <Route path="/about" component={About} />
        <Route path="/cards" component={Cards} />
        <Route path="/stationery" component={Stationery} />
        <Route path="/singles" component={Singles} />
        <Route path="/shop" component={Shop} />
        <Route path='/' component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
