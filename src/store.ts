import { createPainlessRedux as createPR, RxStore } from 'painless-redux';
import { Action, Reducer, EnhancedStore } from '@reduxjs/toolkit';
import { BehaviorSubject } from 'rxjs';
import { STORE, StoreContext } from './context';

const createRxStore = (
	redux: EnhancedStore<any, any, any>,
	addReducer: (key: string, reducer: Reducer) => void,
): RxStore => {
	const observable$ = new BehaviorSubject(redux.getState());
	redux.subscribe(() => observable$.next(redux.getState()));
	const rxStore = observable$ as unknown as RxStore;
	rxStore.addReducer = addReducer;
	rxStore.dispatch = (action: Action) => redux.dispatch(action);
	return rxStore;
};

export const createPainlessRedux = (
	redux: EnhancedStore<any, any, any>,
	addReducer: (key: string, reducer: Reducer) => void,
) => {
	const rxStore = createRxStore(redux, addReducer);
	STORE.painlessRedux = createPR(rxStore);

	return {
		StoreContext,
		STORE,
		rxStore,
	};
};
