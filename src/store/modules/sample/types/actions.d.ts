import { IState } from './state';
import { TMutations } from './mutations';
import { TAugmentedActionContext } from '../../../../../types';

type TActionContext = TAugmentedActionContext<IState, TMutations>;

export enum ActionTypes {
  SINGLE_ACTION = 'singleAction',
}

export type TActions = {
  [ActionTypes.SINGLE_ACTION](context: TActionContext, params?: 'paramsType'): 'ReturnPromiseType';
};
