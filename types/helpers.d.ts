import { Module } from 'vuex';
import { getCurrentInstance } from '@vue/composition-api';

const {
  proxy: {
    $store: { modules },
  },
} = getCurrentInstance();

type TModules = typeof modules;

type TDepth1 = keyof TModules;
type TDepth2<F extends TDepth1> = keyof TModules[F]['modules'];

type TOptions = keyof Module<null, null>; // 'state' | 'getters' | 'mutations' | 'actions'
type TP<P> = P extends Promise<infer U> ? U : never;

type TModule<F extends TDepth1, S extends TDepth2<F>> = TModules[F]['modules'][S];
type TAccessor<F extends TDepth1, S extends TDepth2<F>, O extends TOptions> = keyof TModule<F, S>[O];

type TTargetValue<
  F extends TDepth1,
  S extends TDepth2<F>,
  O extends Extract<'state', TOptions>, // 'state'
  A extends TAccessor<F, S, O>
> = TModule<F, S>[O][A];

type TTargetFunction<
  F extends TDepth1,
  S extends TDepth2<F>,
  O extends Exclude<TOptions, 'state'>, // 'getters' | 'mutations' | 'actions'
  A extends TAccessor<F, S, O>
> = TModule<F, S>[O][A];

export interface IHelpers {
  state<F extends TDepth1, S extends TDepth2<F>, A extends TAccessor<F, S, 'state'>>(
    depth1: F,
    depth2: S,
    accessor: A
  ): TTargetValue<F, S, 'state', A>;
  getter<F extends TDepth1, S extends TDepth2<F>, A extends TAccessor<F, S, 'getters'>>(
    depth1: F,
    depth2: S,
    accessor: A
  ): ReturnType<TTargetFunction<F, S, 'getters', A>>;
  commit<
    F extends TDepth1,
    S extends TDepth2<F>,
    A extends TAccessor<F, S, 'mutations'>,
    T extends TTargetFunction<F, S, 'mutations', A>
  >(
    depth1: F,
    depth2: S,
    accessor: A,
    params?: Parameters<T>[1]
  ): void;
  dispatch<
    F extends TDepth1,
    S extends TDepth2<F>,
    A extends TAccessor<F, S, 'actions'>,
    T extends TTargetFunction<F, S, 'actions', A>
  >(
    depth1: F,
    depth2: S,
    accessor: A,
    params?: Parameters<T>[1]
  ): Promise<TP<ReturnType<T>>>;
}
