const ADD_MASSAGE='ADD-MASSAGE';


const reduserDialogText=(state,action)=>{
   
  if(action.type===ADD_MASSAGE){
    let newMassage={
      id:2,
      name:state.newinpDialog.di
    }
   state.dialogText.push(newMassage);
   

  }
 
  return state;
}
export default reduserDialogText;
