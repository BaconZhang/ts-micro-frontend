import React from 'react';
import { Link, Route, Router } from 'react-router-dom';

const Home = () => <div>这是 assets 模块 Home 页</div>
const Detail = () => <div>这是 assets 模块 Detail 页</div>

class Assets extends React.Component {
  render() {
    return (
      <div>
        Assets Assets
        <ul>
          <li><Link to="/assets">Assets Home 页</Link></li>
          <li><Link to="/assets/detail">Assets Detail 页</Link></li>
        </ul>

        <Route exact path="/assets" component={Home} />
        <Route exact path="/assets/detail" component={Detail} />

      </div>
    )
  }
}

export default Assets