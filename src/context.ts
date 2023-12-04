import { Workspace, Entity, PainlessRedux } from 'painless-redux';
import { createContext } from 'react';

export interface Store {
	painlessRedux: PainlessRedux;
	entities: Record<string, Entity<any>>;
	workspaces: Record<string, Workspace<any>>;
}

export const STORE: Store = {
	painlessRedux: undefined!,
	entities: {},
	workspaces: {},
};

export const StoreContext = createContext<Store>(STORE);

