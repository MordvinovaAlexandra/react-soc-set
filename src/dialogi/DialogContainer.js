
import { connect } from 'react-redux';
import { addMassage, updateDialogi } from '../state';

import Dialogs from '../dialogi/Dialogs';

 let f1=(state)=>{
   return {
     dialog:state.di.dialogs,
     massage:state.posts.MassageEl, 
     dialogText:state.di.dialogText,
     newinpDialog:state.di.newinpDialog,
  }
}

 let f2=(dispatch)=>{
  
   return{
     diChange:(tex)=>{
       dispatch(updateDialogi(tex));
     }
     ,
     diAdd:()=>{
       dispatch(addMassage())
     }
   }
 }
 
let DialogContainer=connect(f1,f2)(Dialogs);
export default DialogContainer;
