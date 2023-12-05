# react-painless-redux

### Description

This is [painless-redux](https://github.com/egorgrushin/painless-redux) adapter for React using [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit).

### Install:
1. `npm i painless-redux react-painless-redux @reduxjs/toolkit`
2. ```tsx
    import { connectPainlessRedux } from 'react-painless-redux';
    
   // When you don't have any redux store yet. If you have - adapt it
    const subRootReducer = (state = {}) => state;
    const rootReducer = combineReducers({
        subRoot: subRootReducer,
    });
    const redux = configureStore({
        reducer: rootReducer,
        devTools: true,
    });
    
    const addReducer = (key: string, reducer: Reducer) => {
        const newReducer = combineReducers({ subRoot: subRootReducer, [key]: reducer });
        redux.replaceReducer(newReducer);
    };
   
    const {
        StoreContext,
        useStore,
        STORE,
    } = connectPainlessRedux(redux, addReducer);

   const App: React.FC = () => {
       return (
           <StoreContext.Provider value={STORE}>
           // your app
           </StoreContext.Provider>
       )
   }
   ```

## Usage

```typescript
    import { useEntity } from 'react-painless-redux';
    import { YourEntityInterface } from './serviceSpecifications.types';
	
    export const useYourEntity = () => useEntity<YourEntityInterface>({
        name: 'your-entity-name',
    });
```

## API

See [painless-redux API](https://github.com/egorgrushin/painless-redux/wiki)
