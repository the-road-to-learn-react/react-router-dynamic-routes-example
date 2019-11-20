import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const ARTICLES = {
  0: {
    title: 'How to fetch data in React',
    url: 'https://www.robinwieruch.de/react-fetching-data/',
  },
  1: {
    title: "React's Ecosystem as a flexible Framework",
    url:
      'https://www.robinwieruch.de/essential-react-libraries-framework/',
  },
  2: {
    title: "What's new in React 16?",
    url: 'https://www.robinwieruch.de/what-is-new-in-react-16/',
  },
  3: {
    title: '8 things to learn in React before using Redux',
    url:
      'https://www.robinwieruch.de/learn-react-before-using-redux/',
  },
  4: {
    title: 'Accept Stripe Payments with React and Express',
    url: 'https://www.robinwieruch.de/react-express-stripe-payment/',
  },
  5: {
    title: 'Tips to learn React + Redux',
    url: 'https://www.robinwieruch.de/tips-to-learn-react-redux/',
  },
};

const App = () => (
  <Router>
    <>
      <Navigation />
      <Content />

      <hr />

      <p>
        Found in{' '}
        <a href="https://roadtoreact.com/">the Road to React</a>
      </p>
    </>
  </Router>
);

const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/articles">Articles</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
);

const Content = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/articles" component={Article} />
    <Route path="/about" component={About} />
  </Switch>
);

const Home = () => <h1>My Home Page</h1>;

const About = () => <h1>My About Page</h1>;

const Article = () => [
  <h1>
    My Article List and Item Page (Note: Title shows up for both
    Pages)
  </h1>,
  <Switch>
    <Route exact path="/articles" component={ArticleList} />
    <Route path="/articles/:id" component={ArticleItem} />
  </Switch>,
];

const ArticleList = () => [
  <h2>All Articles</h2>,
  <ul>
    {Object.keys(ARTICLES).map(key => (
      <li key={key}>
        Go to individual article route:{' '}
        <Link to={`/articles/${key}`}>{ARTICLES[key].title}</Link>
      </li>
    ))}
  </ul>,
];

const ArticleItem = props => [
  <h2>{ARTICLES[props.match.params.id].title}</h2>,
  <p>
    Go to <a href={ARTICLES[props.match.params.id].url}>Article</a>
  </p>,
  <p>
    Back to <Link to="/articles">Articles</Link>
  </p>,
];

export default App;
