import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes';
let mountNode = document.getElementById("react-mount");
let router = (
  <Router 
    history={browserHistory}
    routes={routes}
  />
);
render(router, mountNode);
