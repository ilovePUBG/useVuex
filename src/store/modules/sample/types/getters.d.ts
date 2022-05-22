import { IState } from './state';

export enum GetterTypes {
  SINGLE_GETTER = 'singleGetter',
}

export type TGetters = {
  [GetterTypes.SINGLE_GETTER](state: IState): 'ReturnType';
};
