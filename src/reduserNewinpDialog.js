const UP_DATA_MASSAGE='UPDATE-MASSAGE';
const ADD_MASSAGE='ADD-MASSAGE';
let initial={
 dialogText:[
  {id:1,name: 'sdfsfsfsf'},

          ],
 newinpDialog:[
 {di:'massaagusa'}
]}

const reduserNewinpDialog=(state=initial,action)=>{
   if(action.type===UP_DATA_MASSAGE){
       state.newinpDialog.di=action.text;
      
    }
    else if(action.type===ADD_MASSAGE){
        let newMassage={
          id:2,
          name:state.newinpDialog.di
        }
        state.dialogText.push(newMassage);
      
    
      }
    return state;
}
export default reduserNewinpDialog;