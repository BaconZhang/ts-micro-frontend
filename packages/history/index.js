import React from 'react';
import { Link, Route } from 'react-router-dom';

const Home = () => <div>这是 history 模块 Home 页</div>
const Detail = () => <div>这是 history 模块 Detail 页</div>

class History extends React.Component {
  render() {
    return (
      <div>
        History
        <ul>
          <li><Link to="/history">History Home 页</Link></li>
          <li><Link to="/history/detail">History Detail 页</Link></li>
        </ul>

        <Route exact path="/history" component={Home} />
        <Route exact path="/history/detail" component={Detail} />

      </div>
    )
  }
}

export default History