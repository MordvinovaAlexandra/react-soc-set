const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_tEXT='UPDATE-NEW-POST-TEXT';

let initia= {

    post:[
       {id:1,massage:'привет всем'},
       {id:2,massage:'привет саша'},
       {id:3,massage:'привет маша'},
       {id:4,massage:  'я в пвт'},
       ],
     newPost:
       [{mas:'it-camasutra'}],
     }




     const reduserNewPost=(state=initia,action)=>{
    
    if(action.type ===ADD_POST)

    {
    
        let newPost={
            id:5,
            massage:state.newPost.mas,
        };
        state.post.push(newPost);
        //this._state.newPost.mas='';
       
        
    }
  else if(action.type===UPDATE_NEW_POST_tEXT){
   state.newPost.mas=action.text
    
  }
  return state;
}
export default reduserNewPost;