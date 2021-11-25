import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
function Nav(){
    return(
        <nav className="nav">
           <div className="navd">
       <div className={s.item}>
         <NavLink  className="link" to="/profile" activeClassName={s.active}>Profile</NavLink>
      </div>

      <div className={s.item}>
          <NavLink  className="link" activeClassName={s.active} to="/dialogs">Message</NavLink>
          </div>
          <div className={s.item}>
          <NavLink className="link" activeClassName={s.active} to="/Users">Users</NavLink>
          
          </div>
          <div className={s.item}>
          <NavLink className="link" activeClassName={s.active} to="/News">News</NavLink>
          </div>
          <div className={s.item}>
          <NavLink className="link" activeClassName={s.active} to="/Music">Music</NavLink>
          </div>
          <div className={s.item}>
          <NavLink className="link" activeClassName={s.active} to="/Settings">Setting</NavLink>
          
          </div>
      
      </div>
 
      </nav>
    )
}
export default Nav;