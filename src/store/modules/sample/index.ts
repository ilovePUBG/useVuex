import { state } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import { IState } from './types/state';
import { TGetters } from './types/getters';
import { TActions } from './types/actions';
import { TMutations } from './types/mutations';
import { TStoreModule } from '../../../../types';

const sample: TStoreModule<IState, TGetters, TMutations, TActions> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default sample;
