import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { addMassage, updateDialogi } from '../state';
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

const Dialogs=({dialog,massage,dialogText,newinpDialog, dispatch})=>{
 
  let newDial=dialogText.map((item)=><li>{item.name}</li>)
  let DialogsEements=dialog.map(dialog=><DialogItem name={dialog.name} id={dialog.id}/>)
  let MassageElem=massage.map(massage=><Massage id={massage.id} text={massage.text}/>)


  let inp=useRef();
  //измениения заносятся в state
  let DialogChange=(props)=>{
    let tex=inp.current.value;
    inp.current.value='';
    dispatch(updateDialogi(tex))
  }
  //добавить диалог
  let DialogAdd=(props)=>{
    let text=inp.current.value;
    console.log(text)
    dispatch(addMassage())
    
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
         value={newinpDialog}></textarea>
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