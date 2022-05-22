import { getCurrentInstance } from '@vue/composition-api';

export default function useVuex() {
  const instance = getCurrentInstance();

  if (!instance) {
    throw new Error('only available at setup option');
  }

  const helpers = {
    state(depth1: any, depth2: any, accessor: any) {
      return instance.proxy.$store.state[depth1][depth2][accessor];
    },
    getter(depth1: any, depth2: any, accessor: any) {
      return instance.proxy.$store.getters[`${depth1}/${depth2}/${accessor}`];
    },
    commit(depth1: any, depth2: any, accessor: any, payload: any) {
      instance.proxy.$store.commit(`${depth1}/${depth2}/${accessor}`, payload);
    },
    dispatch(depth1: any, depth2: any, accessor: any, params: any) {
      return instance.proxy.$store.dispatch(`${depth1}/${depth2}/${accessor}`, params);
    },
  };

  return helpers;
}
