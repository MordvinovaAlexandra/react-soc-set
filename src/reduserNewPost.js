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
     }




     const reduserNewPost=(state=initia,action)=>{
    
    switch(action.type ){
case ADD_POST : {
    
  
        let newPost={
            id:5,
            massage:state.newPost.mas,
        };
        let Copystate={...state};
        Copystate.post=[...state.post];
        Copystate.post.push(newPost);
        Copystate.newPost.mas=''
       
       
     return Copystate;  
    
  }
  case UPDATE_NEW_POST_tEXT:{
    let Copystate={...state};
       Copystate.newPost={...state.newPost}
        Copystate.newPost.mas={...state.newPost.mas}
   Copystate.newPost.mas=action.text
    return Copystate
  }
  default:
  return state;
}
     }
export default reduserNewPost;