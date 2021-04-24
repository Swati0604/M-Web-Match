import { Switch, Route, BrowserRouter } from 'react-router-dom';

//Home
import Home from './containers/Home';

//Book Flow
import DesignersListing from './containers/BooksFlow/DesignersListing';
import MentorProfile from './containers/BooksFlow/MentorProfile';

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
