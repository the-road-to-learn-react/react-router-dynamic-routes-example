import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const COURSES = {
  0: {
    title: 'Road to React',
    url: 'http://roadtoreact.com/',
  },
  1: {
    title: 'Road to Firebase',
    url: 'http://roadtofirebase.com/',
  },
  2: {
    title: 'Road to GraphQL',
    url: 'http://roadtographql.com/',
  },
  3: {
    title: 'Road to Redux',
    url: 'http://roadtoredux.com/',
  },
};

const App = () => (
  <Router>
    <Navigation />
    <Content />
  </Router>
);

const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/courses">Courses</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
);

const Content = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/courses" component={Course} />
    <Route path="/about" component={About} />
  </Switch>
);

const Home = () => <h1>My Home Page</h1>;

const About = () => <h1>My About Page</h1>;

const Course = () => (
  <>
    <h1>
      My Course List and Item Page (Note: Title shows up for both
      Pages)
    </h1>

    <Switch>
      <Route exact path="/courses" component={CourseList} />
      <Route path="/courses/:id" component={CourseItem} />
    </Switch>
  </>
);

const CourseList = () => (
  <>
    <h2>All Courses</h2>
    <ul>
      {Object.keys(COURSES).map(key => (
        <li key={key}>
          Go to individual course route:{' '}
          <Link to={`/courses/${key}`}>{COURSES[key].title}</Link>
        </li>
      ))}
    </ul>
  </>
);

const CourseItem = props => (
  <>
    <h2>{COURSES[props.match.params.id].title}</h2>
    <p>
      Go to <a href={COURSES[props.match.params.id].url}>Course</a>
    </p>
    <p>
      Back to <Link to="/courses">Courses</Link>
    </p>
  </>
);

export default App;
