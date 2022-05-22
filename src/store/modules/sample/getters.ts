import { TGetters, GetterTypes } from './types/getters';
import { IState } from './types/state';
import { TGetterTree } from '../../../../types';

export const getters: TGetterTree<IState, TGetters> = {
  [GetterTypes.SINGLE_GETTER](state) {
    return 'ReturnType';
  },
};
