
import './App.css';
import Nav from '../src/nav/Nav';
import Content from '../src/content/contentik/Content';
import Header from '../src/header/Head'

import News from '../src/news/News';
import Music from '../src/music/Music';
import Setting from '../src/setting/Setting';

import { Route, BrowserRouter } from "react-router-dom";
import DialogContainer from './dialogi/DialogContainer';
import UserContainer from './users/userContainer'


function App(props) {

  return (
    <BrowserRouter>
    
    <div className="app_wrapper">
      
    <Header/>
    <Nav/>
    <Route  path="/profile" render={()=>
    <Content/> } ></Route>
    <Route exact path="/dialogs" render={()=>
    <DialogContainer/>}></Route>
    <Route path='/News' render={()=><News/>}></Route>
    <Route path='/Music' render={()=><Music/>}></Route>
    <Route path='/Settings' render={()=><Setting/>}></Route>
    <Route path='/Users' render={()=><UserContainer/>}></Route>
   

    </div>
    
    </BrowserRouter>
  );
  
}

export default App;
