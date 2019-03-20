import React from 'react';
import { Link, Route } from 'react-router-dom';

const Home = () => <div>这是 login 模块 Home 页</div>
const Detail = () => <div>这是 login 模块 Detail 页</div>

class Login extends React.Component {
  render() {
    return (
      <div>
        Login Login
        <ul>
          <li><Link to="/login">Login Home 页</Link></li>
          <li><Link to="/login/detail">Login Detail 页</Link></li>
        </ul>

        <Route exact path="/login" component={Home} />
        <Route exact path="/login/detail" component={Detail} />

      </div>
    )
  }
}

export default Login