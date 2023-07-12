/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** A humanoid creature in the Star Wars universe */
export type BlockchainInitiated = {
  __typename?: 'BlockchainInitiated';
  accounts: Array<Scalars['String']['output']>;
  values: Array<Scalars['String']['output']>;
};

export enum Episode {
  Empire = 'EMPIRE',
  Jedi = 'JEDI',
  NewHope = 'NEW_HOPE'
}

/** A humanoid creature in the Star Wars universe */
export type Human = {
  __typename?: 'Human';
  appearsIn: Array<Episode>;
  homePlanet: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type MutationRoot = {
  __typename?: 'MutationRoot';
  createHuman: Human;
  initNewBlockchain: BlockchainInitiated;
};


export type MutationRootCreateHumanArgs = {
  newHuman: NewHuman;
};


export type MutationRootInitNewBlockchainArgs = {
  data: RpcCall;
};

/** A humanoid creature in the Star Wars universe */
export type NewHuman = {
  appearsIn: Array<Episode>;
  homePlanet: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type QueryRoot = {
  __typename?: 'QueryRoot';
  human: Human;
};


export type QueryRootHumanArgs = {
  id: Scalars['String']['input'];
};

/** Data to init a new blockchain */
export type RpcCall = {
  message: Scalars['String']['input'];
  sender: Scalars['String']['input'];
  signature: Scalars['String']['input'];
};

export type HumanQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type HumanQuery = { __typename?: 'QueryRoot', human: { __typename?: 'Human', name: string, appearsIn: Array<Episode>, homePlanet: string } };


export const HumanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Human"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"human"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"appearsIn"}},{"kind":"Field","name":{"kind":"Name","value":"homePlanet"}}]}}]}}]} as unknown as DocumentNode<HumanQuery, HumanQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** A humanoid creature in the Star Wars universe */
export type BlockchainInitiated = {
  __typename?: 'BlockchainInitiated';
  accounts: Array<Scalars['String']['output']>;
  values: Array<Scalars['String']['output']>;
};

export enum Episode {
  Empire = 'EMPIRE',
  Jedi = 'JEDI',
  NewHope = 'NEW_HOPE'
}

/** A humanoid creature in the Star Wars universe */
export type Human = {
  __typename?: 'Human';
  appearsIn: Array<Episode>;
  homePlanet: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type MutationRoot = {
  __typename?: 'MutationRoot';
  createHuman: Human;
  initNewBlockchain: BlockchainInitiated;
};


export type MutationRootCreateHumanArgs = {
  newHuman: NewHuman;
};


export type MutationRootInitNewBlockchainArgs = {
  data: RpcCall;
};

/** A humanoid creature in the Star Wars universe */
export type NewHuman = {
  appearsIn: Array<Episode>;
  homePlanet: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type QueryRoot = {
  __typename?: 'QueryRoot';
  human: Human;
};


export type QueryRootHumanArgs = {
  id: Scalars['String']['input'];
};

/** Data to init a new blockchain */
export type RpcCall = {
  message: Scalars['String']['input'];
  sender: Scalars['String']['input'];
  signature: Scalars['String']['input'];
};
