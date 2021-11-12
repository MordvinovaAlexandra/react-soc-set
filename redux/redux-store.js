import {combineReducers, createStore} from 'redux';
import reduserDialogText from "./reduserDialogText";
import reduserNewinpDialog from "./reduserNewinpDialog";
import reduserNewPost from "./reduserNewPost";
import reduserPost from "./reduserPost";


let reducers=combineReducers({
    NewinpDialog: reduserNewinpDialog,
    NewPos:  reduserNewPost,
   })


let store=createStore(reducers);
export default store;