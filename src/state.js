import Dialogs from "./dialogi/Dialogs";
import reduserDialogText from "./reduserDialogText";
import reduserNewinpDialog from "./reduserNewinpDialog";
import reduserNewPost from "./reduserNewPost";
import reduserPost from "./reduserPost";

  
    const ADD_POST='ADD-POST';
    const UPDATE_NEW_POST_tEXT='UPDATE-NEW-POST-TEXT';
    const ADD_MASSAGE='ADD-MASSAGE';
    const UP_DATA_MASSAGE='UPDATE-MASSAGE';
let store={
   _state:{
         
        di:{
          dialogText:[
            {id:1,name: 'sdfsfsfsf'},
     
                    ],
           newinpDialog:[
           {di:'massaagusa'}
          ],
        },
         dialogs:[
            {name: "sasha", id:1},
            {name: "masha", id:2},
            {name: "dasha", id:3},
            {name: "liza",  id:4},
            {name: "vadim", id:5},
          ],
         MassageEl:[
            {id:1, text:"Прив"},
            {id:2, text:"Привет амлет"},
            {id:3, text:"Прив дессерт"},
            {id:4, text:"Прив кабет"},
            {id:5, text:"Прив дурет"},
          ],
          posts:{
         post:[
            {id:1,massage:'привет всем'},
            {id:2,massage:'привет саша'},
            {id:3,massage:'привет маша'},
            {id:4,massage:  'я в пвт'},
            ],
          newPost:
            [{mas:'it-camasutra'}],
          }
          
            

    },
    getState(){
      return this._state;
    },
     _callSubscriber()
    
     {
    console.log('был изменен')
     },

   subscribe(observer){
    this._callSubscriber=observer
   },

  dispatch(action){
    //this._state.di=reduserDialogText(this._state.di,action);
    this._state.di=reduserNewinpDialog(this._state.di,action);
    //this._state.posts=reduserPost(this._state.posts,action);
    this._state.posts=reduserNewPost(this._state.posts,action)
    this._callSubscriber(this._state)
  //   if(action.type ===ADD_POST)
  //   {
    
  //       let newPost={
  //           id:5,
  //           massage:this._state.newPost.mas,
  //       };
  //       this._state.post.push(newPost);
  //       //this._state.newPost.mas='';
  //       this._callSubscriber(this._state)
        
  //   }
  // else if(action.type===UPDATE_NEW_POST_tEXT){
  //   this._state.newPost.mas=action.text
  //   this._callSubscriber(this._state)
  // }
  // else if(action.type===ADD_MASSAGE){
  //   let newMassage={
  //     id:2,
  //     name:this._state.newinpDialog.di
  //   }
  //   this._state.dialogText.push(newMassage);
  //   this._callSubscriber(this._state)

  // }
  // else if(action.type===UP_DATA_MASSAGE){
  //     this._state.newinpDialog.di=action.text;
  //     this._callSubscriber(this._state)
  // }


}

}
export const addPostActionCreator=()=>
{
  return {type:ADD_POST}
  
}

export const updateNewPostTextActionCreater=(ext)=>{
return{type:UPDATE_NEW_POST_tEXT,text:ext}
}

// export const addDialogCreator=()=>{
//   return{ type:ADD_MASSAGE}
// }

//dialogi
export const updateDialogi=(tex)=>{
return{type:UP_DATA_MASSAGE, text:tex}
}

export const addMassage=()=>{
  return {type:ADD_MASSAGE}
}
window.store=store
    export default store;
    
   

   

  