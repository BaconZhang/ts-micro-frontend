import { ReactNode } from 'react';

export interface PACKAGE {
  path: string,
  name: string
}
export interface CONFIG {
  packages: Array<PACKAGE>
}

interface RENDER {
  (props: any): ReactNode
}

export interface ROUTE {
  path: string,
  render: RENDER,
  name: string
} 