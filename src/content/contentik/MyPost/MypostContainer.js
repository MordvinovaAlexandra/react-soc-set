
import MyPost from './MyPost';

import { addPostActionCreator, updateNewPostTextActionCreater } from '../../../state';
import { connect } from 'react-redux';



let f1=(state)=>{

  return {
    post:state.posts.post,
    neww:state.posts.newPost,   
    
 }
}

let f2=(dispatch)=>{
 
  return{
    upDateNewPostText:(ext)=>{
      dispatch(updateNewPostTextActionCreater(ext));
    }
    ,
    addPost:()=>{
    dispatch({type:'ADD-POST'}); 
    dispatch( addPostActionCreator())
    }
  }
}

let MyPostContainer =connect(f1,f2)(MyPost);

export default MyPostContainer;