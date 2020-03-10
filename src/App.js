import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
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
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/courses/*" element={<Course />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

const Home = () => <h1>My Home Page</h1>;

const About = () => <h1>My About Page</h1>;

const Course = () => (
  <>
    <h1>
      My Course List and Item Page (Note: Title shows up for both
      Pages)
    </h1>

    <Routes>
      <Route exact path="/" element={<CourseList />} />
      <Route path="/:id" element={<CourseItem />} />
    </Routes>
  </>
);

const CourseList = () => (
  <>
    <h2>All Courses</h2>
    <ul>
      {Object.keys(COURSES).map(key => (
        <li key={key}>
          Go to individual course route:&nbsp;
          <Link to={`/courses/${key}`}>{COURSES[key].title}</Link>
        </li>
      ))}
    </ul>
  </>
);

const CourseItem = () => {
  const { id } = useParams();

  return (
    <>
      <h2>{COURSES[id].title}</h2>
      <p>
        Go to <a href={COURSES[id].url}>Course</a>
      </p>
      <p>
        Back to <Link to="/courses">Courses</Link>
      </p>
    </>
  );
};

export default App;
