import React from 'react';
import { Link, Route } from 'react-router-dom';

const Home = () => <div>这是 energy 模块 Home 页</div>
const Detail = () => <div>这是 energy 模块 Detail 页</div>

class Energy extends React.Component {
  render() {
    return (
      <div>
        Energy
        <ul>
          <li><Link to="/energy">Energy Home 页</Link></li>
          <li><Link to="/energy/detail">Energy Detail 页</Link></li>
        </ul>

        <Route exact path="/energy" component={Home} />
        <Route exact path="/energy/detail" component={Detail} />

      </div>
    )
  }
}

export default Energy