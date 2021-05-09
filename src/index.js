import React from 'react';
import GoogleSheetsProvider from 'react-db-google-sheets';
import { BrowserRouter as Router } from 'react-router-dom';
import { hydrate } from 'react-dom';

//Custom Component
import AppRouter from './AppRouter';
import ScrollTop from './components/ScrollTop';

hydrate(
  <GoogleSheetsProvider>
    <Router>
      <ScrollTop>
        <AppRouter />
      </ScrollTop>
    </Router>
  </GoogleSheetsProvider>,
  document.getElementById('root')
);
