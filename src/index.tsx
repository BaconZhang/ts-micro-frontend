import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import history from './history';
import { Location } from 'history';

let ROUTES_MAP = new Map();
if (Array.isArray(process.env.packages)) {
  process.env.packages.reduce((prev, p) => {
    let entry = (new Function(`return ${p.entry}`))();
    prev.set(p.path, entry);
    return prev;
  }, ROUTES_MAP)
}

const push = (path: string) => history.push(path);
const App = ({ body = null }) => <div>
  <div>
    <a onClick={() => push('/login')}>login</a>
    <a onClick={() => push('/energy')}>energy</a>
    <a onClick={() => push('/history')}>history</a>
  </div>
  {body}
</div>

history.listen((location: Location) => {
  console.log(location.pathname);
  let body = ROUTES_MAP.get(location.pathname)({ name: location.pathname });
  ReactDOM.render(<App body={body} />, document.getElementById('root'));
});


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
