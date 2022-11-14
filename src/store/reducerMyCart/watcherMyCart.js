
import {  put,  takeEvery} from "redux-saga/effects";
import * as Actions from './MyCartTypes'
export function* watchMyCart(){
    
 yield takeEvery(Actions.WATCHER_ADD_TO_CART,workerAddtocart)
 yield takeEvery(Actions.WATCHER_CLEAR_MY_CART,workerCleartocart)
}
// eslint-disable-next-line require-yield
function* workerAddtocart(action){
    
 try{
   yield put({
        type:Actions.REDUCER_ADD_TO_CART,
        data:action.data,
    })
   
 }catch(error){

 }
}
function* workerCleartocart(action){
    
  try{
  
     yield put({
       type:Actions.REDUCER_CLEAR_MY_CART,
     })
  }catch(error){
 
  }
 }