import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/index.css';

import App from './components/App';
import BaseLayout from './components/BaseLayout';
import CategoryView from './components/CategoryView';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/category/:category" component={CategoryView} />
        <Route path='/' component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
