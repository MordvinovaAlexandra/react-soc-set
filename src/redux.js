import {combineReducers, createStore} from 'redux';

import reduserNewinpDialog from "./reduserNewinpDialog";
import reduserNewPost from "./reduserNewPost";


let reducers=combineReducers({
    reduserNewinpDialog,
      reduserNewPost,
   })


let store=createStore(reducers);
export default store;