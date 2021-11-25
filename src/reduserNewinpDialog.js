const UP_DATA_MASSAGE='UPDATE-MASSAGE';
const ADD_MASSAGE='ADD-MASSAGE';
let initial={
 dialogText:[
  {id:1,name: 'sdfsfsfsf'},

          ],
 newinpDialog:[
 {di:'massaagusa'}
 
],
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

const reduserNewinpDialog=(state=initial,action)=>{
  switch(action.type){
  case(UP_DATA_MASSAGE):{
     let stateCopy={...state};
     stateCopy.newinpDialog={...state.newinpDialog}
     stateCopy.newinpDialog.di={...state.newinpDialog.di}
     stateCopy.newinpDialog.di=action.text;
      // stateCopy.newinpDialog.di=action.text;
      return stateCopy
    }
  case(ADD_MASSAGE):{
        let newMassage={
          id:2,
          name:state.newinpDialog.di
        }
        let stateCopy={...state};
        stateCopy.dialogText=[...state.dialogText]
        stateCopy.dialogText.push(newMassage);
        stateCopy.newinpDialog=''
      return stateCopy;
    
      }
    default: return  state;
  }
}
export default reduserNewinpDialog;