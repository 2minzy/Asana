/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.graphqls' {
  import { DocumentNode } from 'graphql';
  export default typeof DocumentNode;
}

declare module '*.jpg' {
  const value: any;
  export default value;
}

declare module '*.yml';
