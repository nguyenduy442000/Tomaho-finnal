
import { put, takeEvery} from "redux-saga/effects";
import * as Actions from './SanPhamTypes'
export function* watchAddProduct(){
    
 yield takeEvery(Actions.CREATE_NEW_SAN_PHAM,workerAddProduct)

}
// eslint-disable-next-line require-yield
function* workerAddProduct(action){

 try{
   yield put({
        type:Actions.CREATE_NEW_SAN_PHAM_REDUCER,
        data:action.data,
    })
 }catch(error){

 }
}