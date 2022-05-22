import { IState } from './state';

export enum MutationTypes {
  SINGLE_MUTATION = 'singleMutation',
}

export type TMutations = {
  [MutationTypes.SINGLE_MUTATION](state: IState, payload?: 'payloadType'): 'ReturnType';
};
