import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import watchFetchServicesList from "./sagas";
import serviceReduecr from "./service-reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(serviceReduecr, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchServicesList);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
