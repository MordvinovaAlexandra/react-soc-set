import { connect } from "react-redux";
import { followAC, setCurrent, setUserAC, toggeleFetching, unfollowAC } from "../reduserUsers";
import React from "react";
import axios from "axios";
import User0 from "./User0";
import  './userStyle.css';
//import im from './img/829.gif'
import Plelouder from "../content/contentik/prelouder/Prelouder";
class UserApi extends React.Component{
    //компонент вмонтрован
    //side effect
    componentDidMount(){
      this.props.isfetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
        (response)=>{
        this.props.setUsers(response.data.items)
        this.props.isfetching(false)
      })
      
    }
    
      onPageChange=(p)=>{

        this.props.setCurrent(p)
        this.props.isfetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then((response)=>{
          this.props.setUsers(response.data.items)
          this.props.setCurrent(response.data.totalCount)
          this.props.isfetching(false)
        })
      }
  
  render (){
      return(
      <>
      {this.props.isFetching?
      <Plelouder/>:null}
      <User0 totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    onPageChange={this.onPageChange}
                    users={this.props.users}
                    />
                      </>
                    )
                  
  
  }
  }
  

let mapStateToProps=(state)=>{
    
    return{
        users:state.usersPage.users,
        totalCount:state.usersPage.totalCount,
        pageSize:state.usersPage.pageSize,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}

let mapDispathToProps=(dispatch)=>{
    return{
        setCurrent:(current)=>{
            dispatch(setCurrent(current))
        },
        follow: (userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId)=>{
             dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUserAC(users))
        },
         isfetching:(fetching)=>{
             dispatch(toggeleFetching(fetching))
         }
       
    }
}



 const UserContainer= connect(mapStateToProps,mapDispathToProps)(UserApi);
export default UserContainer;