import { useContext } from 'react';
import { StoreContext } from './context';
import { createEntity, createWorkspace, Entity, EntitySchema, Workspace, WorkspaceSchema } from 'painless-redux';

export const useStore = () => useContext(StoreContext);

export const useEntity = <T>(schema: Partial<EntitySchema<T>>): Entity<T> => {
	const store = useStore();
	const key = schema.name as string;
	if (!store.entities[key]) {
		store.entities[key] = createEntity<T>(store.painlessRedux, schema);
	}
	return store.entities[key];
};

export const useWorkspace = <T>(schema: Partial<WorkspaceSchema<T>>): Workspace<T> => {
	const store = useStore();
	const key = schema.name as string;
	if (!store.workspaces[key]) {
		store.workspaces[key] = createWorkspace<T>(store.painlessRedux, schema);
	}
	return store.workspaces[key];
};
