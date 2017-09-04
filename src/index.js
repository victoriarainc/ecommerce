import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/index.css';

import App from './components/App';
import BaseLayout from './components/BaseLayout';
import CategoryView from './components/CategoryView';
import About from './components/About';
import Contact from './components/Contact';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/category/:category" component={CategoryView} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path='/' component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
