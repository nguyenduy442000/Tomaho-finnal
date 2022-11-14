import {all} from 'redux-saga/effects';
import {watchAddProduct} from './reducerSanPham/watcherSanPham'
import {watchMyCart} from './reducerMyCart/watcherMyCart'
import {watchDonHang} from './reducerDonHang/watcherDonHang'
export default function* rootSaga(){
    yield all([
        watchAddProduct(),
        watchMyCart(),
        watchDonHang(),
    ])
}
