import { Route } from 'react-router';
import App from './components/App';
import Video from './components/Video';

const routes = (
  <Route path='/' component={App}>
    <Route path='/:videoId' component={Video} />
  </Route>
);

export default routes;
