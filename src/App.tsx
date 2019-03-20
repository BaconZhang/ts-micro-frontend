import React, { Component } from 'react';
import { Route, Router, Link, Switch, RouteComponentProps } from 'react-router-dom';
import { CONFIG, PACKAGE, ROUTE } from './Config';
import config from './config.json';
import history from './history';
import './App.css';

const createRoutes = async (config: CONFIG): Promise<Array<ROUTE>> => {
  const entries = await Promise.all(config.packages.map(i => import(`../packages${i.path}/build/bundle.js`)));
  const routes = config.packages.map((item: PACKAGE, index) => ({
    path: item.path,
    name: item.name,
    render: (props: RouteComponentProps) => {
      let Compoennt = entries[index].default;
      console.log(props)
      return <Compoennt {...props} />
    }
  }));
  return routes;
}

interface PropsType {

}
interface StateType {
  routes: Array<ROUTE>,
}

class App extends Component<PropsType, StateType> {
  state = {
    routes: []
  };

  async componentDidMount() {
    let routes = await createRoutes(config);
    this.setState({ routes });
  }

  render() {
    const { routes } = this.state;
    return (
      routes.length ? <Router history={history}>
        <div>
          <div>
            <div>导航</div>
            {
              routes.map((i: ROUTE) => <Link key={i.path} to={i.path} style={{ marginRight: 16 }}>{i.name}</Link>)
            }
          </div>
          <Switch>
            {
              routes.map((route: ROUTE) => <Route key={route.path} path={route.path} render={route.render} />)
            }
            <Route render={() => <div>404</div>} />
          </Switch>
        </div>
      </Router> : <div>文件配置中...</div>
    );
  }
}

export default App;
