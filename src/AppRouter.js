import React, { useLayoutEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import GoogleSheetsProvider from 'react-db-google-sheets';

//Home
import Home from './containers/Home';

//Book Flow
import DesignersListing from './containers/BooksFlow/DesignersListing';
import MentorProfile from './containers/BooksFlow/MentorProfile';

//Privacy Policy
import PrivacyPolicy from './containers/PrivacyPolicy';

//Take Home Challenge Flow
import ChallengeListing from './containers/ChallengeFlow/ChallengeListing';
import ChallengeDetails from './containers/ChallengeFlow/ChallengeDetails';

//Resources
import Resources from './containers/Resources';

//Guide Flow
import GuideListing from './containers/Guides/GuideListing';
import GuideDetails from './containers/Guides/GuideDetails';

//Changelog
import Changelog from './containers/Changelog';
import BooksListing from './containers/BooksFlow/BookListing';
import BookDetail from './containers/BooksFlow/BookDetail';

//Company Flow
import CompaniesList from './containers/Companies/CompaniesList';
import CompanyDetail from './containers/Companies/CompanyDetail';

//Page404
import Page404 from './containers/Page404';

//Styles
import './styles/App.scss';

function AppRouter() {
  return (
    <Switch>
      {/* Home */}
      <Route exact path='/' component={Home} />

      {/* Book Flow */}
      <Route exact path='/designer-listing' component={DesignersListing} />
      <Route
        exact
        path='/mentor-profile/:mentorName'
        component={MentorProfile}
      />
      <Route exact path='/books-listing' component={BooksListing} />
      <Route exact path='/books-detail/:bookName' component={BookDetail} />

      {/* Challenge Flow */}
      <Route exact path='/challenge-listing' component={ChallengeListing} />
      <Route
        exact
        path='/challenge-details/:companyName'
        component={ChallengeDetails}
      />

      {/* Guide Flow */}
      <Route exact path='/guide-listing' component={GuideListing} />
      <Route exact path='/guide-details/:slug' component={GuideDetails} />

      {/* Companies Flow */}
      <Route exact path='/companies-list' component={CompaniesList} />
      <Route
        exact
        path='/company-detail/:companyName'
        component={CompanyDetail}
      />

      {/* Resources listing */}
      <Route exact path='/resources' component={Resources} />

      {/* Privacy Policy  */}
      <Route exact path='/privacy-policy' component={PrivacyPolicy} />

      {/* Changelog */}
      <Route exact path='/changelog' component={Changelog} />

      {/* Page404 and Page500 */}
      <Route path='' component={Page404} />
    </Switch>
  );
}

export default AppRouter;
