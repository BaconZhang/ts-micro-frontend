import { Inject } from './index';
export interface Injected<T> {
  _annotations: T[];
  new(...args: any[]): any;
  [key: string]: any;
}

export interface Inject {
  new(...args: any[]): any;
  [key: string]: any;
}

function inject(annotations: Inject[]) {
  return function (constructor: Inject): Injected<Inject> {
    return class extends constructor {
      static _annotations = annotations;
    }
  }
}

class Inejctor<T extends Injected<Inject>> {
  private target: T;
  private cache: Map<T, T>;
  constructor(target: T) {
    this.target = target;
    this.cache = new Map();
  }

  hasAnnotations(target: T): boolean {
    return Array.isArray(target._annotations) && !!target._annotations.length;
  }

  readAnnotations(annotations: Array<T>): Array<T> {
    return annotations.map(annotation => {
      if (this.hasAnnotations(annotation)) {
        return new annotation(
          ...this.readAnnotations(annotation._annotations as Array<T>)
        );
      } else {
        return new annotation();
      }
    })
  }

  get(): T {
    if (this.cache.has(this.target)) {
      return this.cache.get(this.target) as T;
    } else {
      let instance = this.readAnnotations([this.target])[0];
      this.cache.set(this.target, instance);
      return instance;
    }
  }
}

export {
  inject,
  Inejctor
}