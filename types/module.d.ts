import { GetterTree, MutationTree, ActionTree, Module, ActionContext } from 'vuex';

export type TGetterTree<IS, TG> = GetterTree<IS, IS> & TG;

export type TMutationTree<IS, TM> = MutationTree<IS> & TM;

export type TActionTree<IS, TA> = ActionTree<IS, IS> & TA;

export type TStoreModule<IS, TG, TM, TA> = Omit<Module<IS, IS>, 'state' | 'getters' | 'mutations' | 'actions'> & {
  state?: IS;
  getters?: TGetterTree<IS, TG>;
  mutations?: TMutationTree<IS, TM>;
  actions?: TActionTree<IS, TA>;
};

export type TAugmentedActionContext<IS, TM> = Omit<ActionContext<IS, IS>, 'commit'> & {
  commit<K extends keyof TM>(key: K, payload?: Parameters<TM[K]>[1]): ReturnType<TM[K]>;
};
