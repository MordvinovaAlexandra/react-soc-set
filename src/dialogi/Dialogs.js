import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem=(props)=>{

return(
    <div className={s.dialog}>
        <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
    </div>
     )
}
const Massage=(props)=>{
  return(
      <div className={s.massage}>{props.text}</div>
        )
}

  function Dialogs ({dialog,massage,dialogText,newinpDialog,diChange,diAdd}){
 
  let newDial=dialogText.map((item)=><li>{item.name}</li>)
  let DialogsEements=dialog.map(dialog=><DialogItem name={dialog.name} id={dialog.id}/>)
  let MassageElem=massage.map(massage=><Massage id={massage.id} text={massage.text}/>)


  let inp=useRef();
  //измениения заносятся в state
  let DialogChange=(props)=>{
    let tex=inp.current.value;
    inp.current.value='';
    diChange(tex)
  }
  //добавить диалог
   const DialogAdd=(props)=>{
    let text=inp.current.value;
    console.log(text)
    diAdd()
    
  }
    return(
  <div className="app-wrapper-content">
      <div class={s.dialogs}>
        <div class="dialogs-item">
           {DialogsEements} 
        </div>
        <div>
           {MassageElem} 
        </div>
        <div>
        <textarea
         onChange={DialogChange} 
         ref={inp} 
         value={newinpDialog.di}></textarea>
        <button
        onClick={DialogAdd}>кнопка</button>
        <div>
          {newDial}
        </div>
      </div>
      </div>
     
 </div>
    );
}
export default Dialogs;