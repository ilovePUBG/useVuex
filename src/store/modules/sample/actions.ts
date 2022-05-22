import { ActionTypes, TActions } from './types/actions';
import { IState } from './types/state';
import { TActionTree } from '../../../../types';

export const actions: TActionTree<IState, TActions> = {
  /**
   * <Action 이름>
   * @description
   * ...
   */
  [ActionTypes.SINGLE_ACTION]({ state, getters, commit, dispatch }, params) {
    return 'ReturnPromiseType';
  },
};
