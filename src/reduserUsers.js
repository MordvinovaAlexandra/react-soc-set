const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_tEXT='UPDATE-NEW-POST-TEXT';

const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_USERS='SET_USERS';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE'
const TOGGELE_FETCHING='TOGGELE_FETCHING'
let initialState= {
    users:[
    //    {id:1, pfotoURL:"https://temperaturka.com/wp-content/uploads/b/1/1/b11ec6657c1d1e413b326e746fd35151.jpg ",followers:true, fullName:"Sanechka", status:"i look",location:{country:'Belarus',town:"Minsk"}},
    //    {id:2, pfotoURL:"https://temperaturka.com/wp-content/uploads/b/1/1/b11ec6657c1d1e413b326e746fd35151.jpg",followers:true, fullName:"manechka", status:"i look",location:{country:'Belarus',town:"Minsk"}},
    //    {id:3, pfotoURL:"https://temperaturka.com/wp-content/uploads/b/1/1/b11ec6657c1d1e413b326e746fd35151.jpg", followers:true, fullName:"gula", status:"i look",location:{country:'Belarus',town:"Minsk"}},
    //    {id:4, pfotoURL:"https://temperaturka.com/wp-content/uploads/b/1/1/b11ec6657c1d1e413b326e746fd35151.jpg", followers:true, fullName:"ragula", status:"i look",location:{country:'Belarus',town:"Minsk"}},
      ],
      totalCount:27,
      pageSize:5,
      currentPage:3,
      isFetching:true,
     }




    const reduserUsers=(state=initialState,action)=>{
    switch(action.type){
       case FOLLOW:
         return{
            ...state,
            users:
                state.users.map((u)=>{
                    if(u.id===action.userId){
                        return{...u, followers:true}
                        
                    }
                    return u
                })
            
            
          }
         case UNFOLLOW:
        return {
            ...state,
            users:
                state.users.map((u)=>{
                    if(u.id===action.userId){
                        return{...u, followers:false}
                        
                    }
                    return u
                })
            
            
          }
        
          
           case SET_USERS:
               return{...state,users:[...state.users,...action.users]}


            case SET_CURRENT_PAGE:
                return{...state, currentPage:action.current}


            case TOGGELE_FETCHING:
                return{
                 ...state, isFetching:action.fetching
                }
    default: return state
             
    
}
     }
     
export const setCurrent=(current)=>({type:SET_CURRENT_PAGE,current})
export const followAC=(userId)=>({type:FOLLOW,userId})
export const unfollowAC=(userId)=>({type:UNFOLLOW,userId})
export const setUserAC=(users)=>({type:SET_USERS,users})
export const toggeleFetching=(fetching)=>({type:TOGGELE_FETCHING,fetching})

export default reduserUsers;