import Post from '../MyPost/Post/Post'
import {useRef} from 'react';

import { addPostActionCreator, updateNewPostTextActionCreater } from '../../../state';


function MyPost({neww,dispatch,post,upDateNewPostText,addPost}, props){

 
console.log(props.post)

  const onaddPost=(props)=>{
    //let text=newInp.current.value;
    addPost()
   
    
    //newInp.current.value='';
  }

  const onChenge=(props)=>{
   let ext=newInp.current.value;
  upDateNewPostText(ext)
   
   
   newInp.current.value='';
  }

  let newInp=useRef()
  let newPost=post.map((item)=><Post massage={item.massage}/>)
  //let value=neww.map((item)=>{<div>{item.mas}</div>})
    return(
    <div className="post">
        <textarea onChange={onChenge} ref={newInp} value={neww.mas}/>
        <button onClick={onaddPost}>add Post</button>
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