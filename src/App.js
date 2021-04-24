import React from 'react';
import GoogleSheetsProvider from 'react-db-google-sheets';
import AppRouter from './AppRouter.js';

//Styles
import './styles/App.scss';

function App() {
  return (
    <>
      <GoogleSheetsProvider>
        <div className='app-container'>
          <AppRouter />
        </div>
      </GoogleSheetsProvider>
    </>
  );
}

export default App;
