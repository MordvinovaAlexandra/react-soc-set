
import './App.css';
import Nav from '../src/nav/Nav';
import Content from '../src/content/contentik/Content';
import Header from '../src/header/Head'
import Dialogs from './dialogi/Dialogs';
import News from '../src/news/News';
import Music from '../src/music/Music';
import Setting from '../src/setting/Setting';
import { Route, BrowserRouter } from "react-router-dom";


function App(props) {
  
  return (
    <BrowserRouter>
    <div className="app_wrapper">
      
    <Header/>
    <Nav/>
    <Route  path="/profile" render={()=>
    <Content
     newPost={props.state.posts.newPost.mas}
     post={props.state.posts.post} 
     dispatch={props.dispatch}
      /> } ></Route>
    <Route exact path="/dialogs" render={()=>
    <Dialogs
    dialogText={props.state.di.dialogText}
    dispatch={props.dispatch}
    newinpDialog={props.state.di.newinpDialog.di}
    newDialog={props.state.newDialog}
    
    massage={props.state.MassageEl} 
    dialog={props.state.dialogs} />}></Route>
    <Route path='/News' render={()=><News/>}></Route>
    <Route path='/Music' render={()=><Music/>}></Route>
    <Route path='/Settings' render={()=><Setting/>}></Route>

    </div>
    
    </BrowserRouter>
  );
  
}

export default App;
