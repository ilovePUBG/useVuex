import { TMutations, MutationTypes } from './types/mutations';
import { IState } from './types/state';
import { TMutationTree } from '../../../../types';

export const mutations: TMutationTree<IState, TMutations> = {
  [MutationTypes.SINGLE_MUTATION](state, payload) {
    return 'ReturnType';
  },
};
