import Post from '../MyPost/Post/Post'
import {useRef} from 'react';

import { addPostActionCreator, updateNewPostTextActionCreater } from '../../../state';


function MyPost({post,neww,dispatch}, props){

 
console.log(props.post)

  const addPost=(props)=>{
    let text=newInp.current.value;
    dispatch({type:'ADD-POST'}); 
    
    dispatch( addPostActionCreator())
    newInp.current.value='';
  }

  const onChenge=(props)=>{
   let ext=newInp.current.value;
   dispatch( updateNewPostTextActionCreater(ext))
   
   newInp.current.value='';
  }

  let newInp=useRef()
  let newPost=post.map((item)=><Post massage={item.massage}/>)
  
    return(
    <div className="post">
        <textarea onChange={onChenge} ref={newInp} value={neww}/>
        <button onClick={addPost}>add Post</button>
        <div>
        my Post
        </div>
        <div>
        new post
        </div>
        {newPost}
    </div>
    )
}
export default MyPost;