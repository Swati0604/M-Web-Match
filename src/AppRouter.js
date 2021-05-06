import { Switch, Route, BrowserRouter } from 'react-router-dom';

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
import Resources from './containers/Resources';
import GuideListing from './containers/Guides/GuideListing';

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
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

          {/* Challenge Flow */}
          <Route exact path='/challenge-listing' component={ChallengeListing} />
          <Route
            exact
            path='/challenge-details/:companyName'
            component={ChallengeDetails}
          />

          {/* Guide Flow */}
          <Route exact path='/guide-listing' component={GuideListing} />

          {/* Resources listing */}
          <Route exact path='/resources' component={Resources} />

          {/* Privacy Policy  */}
          <Route exact path='/privacy-policy' component={PrivacyPolicy} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
