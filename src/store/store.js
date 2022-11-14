import { createStore,applyMiddleware } from "redux";
import rootReducer from "./App.all.reducer"
import createSagaMiddleware from "@redux-saga/core";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootWatcher from "./App.all.watcher";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['reducerSanPham','reducerDongDonHang','reducerDonHang'],
   

  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
const saga = createSagaMiddleware();
const middleWares = [saga];
const store = createStore(persistedReducer,applyMiddleware(...middleWares));
saga.run(rootWatcher);

export const persistor =persistStore(store)
export default store;