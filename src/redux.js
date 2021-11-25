import {combineReducers, createStore} from 'redux';

import reduserNewinpDialog from "./reduserNewinpDialog";
import reduserNewPost from "./reduserNewPost";
import reduserUsers from './reduserUsers';


let reducers=combineReducers({
    di:reduserNewinpDialog,
      posts: reduserNewPost,
      usersPage:reduserUsers,
   })


let store=createStore(reducers);
window.store=store;
export default store;