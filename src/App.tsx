import React, { Component, Suspense, lazy } from 'react';
import { Route, Router, Link, Switch } from 'react-router-dom';
import { PACKAGE, ROUTE } from './Config';
import config from './config.json';
import history from './history';
import { inject, Injected, Inject, Inejctor } from './ioc';
import './App.css';

class A {
  private name: String;
  constructor() {
    this.name = "A";
  }

  sayName() {
    console.log(this.name);
  }
}

class B {
  private id: String;
  constructor() {
    this.id = "123";
  }

  sayId() {
    console.log(this.id);
  }
}

@inject([A, B])
class Test {
  private a: A;
  private b: B;
  constructor(a: A, b: B) {
    this.a = a;
    this.b = b;
  }

  sayName() {
    this.a.sayName();
  }

  sayId() {
    this.b.sayId();
  }
}


const TestInjector = new Inejctor(Test as Injected<Inject>);
const instance = TestInjector.get();
instance.sayId();
instance.sayName()

interface PropsType {

}
interface StateType {
  routes: Array<ROUTE>,
}

class App extends Component<PropsType, StateType> {
  render() {
    return (
      <Suspense fallback={<div>文件资源加载中...</div>}>
        <Router history={history}>
          <div>
            <div>
              <div>导航</div>
              {
                config.packages.map((i: PACKAGE) => <Link key={i.path} to={i.path} style={{ marginRight: 16 }}>{i.name}</Link>)
              }
            </div>
            <Switch>
              {
                config.packages.map((i: PACKAGE) => <Route key={i.path} path={i.path} component={lazy(() => import(`../packages${i.path}/build/bundle.js`))} />)
              }
              <Route render={() => <div>404</div>} />
            </Switch>
          </div>
        </Router>
      </Suspense>
    )
  }
}

export default App;
