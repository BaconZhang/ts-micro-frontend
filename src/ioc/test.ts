import { inject, Injected, Inject, Inejctor, params } from './index';

@params({ name: "A" })
class A {
  private name: String;
  constructor(name: String) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}

@params({ id: "1235678" })
class B {
  private id: String;
  constructor(id: String) {
    this.id = id;
  }

  sayId() {
    console.log(this.id);
  }
}

@inject([B])
class C {
  private b: B;
  constructor(b: B) {
    this.b = b;
  }

  sayId() {
    this.b.sayId();
  }
}

@inject([A, C])
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
instance.sayName();