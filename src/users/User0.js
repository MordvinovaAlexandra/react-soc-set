let User0=(props)=>{

    let pageCount=Math.ceil(props.totalCount/props.pageSize);
    let mass=[];
    for(let i=1;i<=pageCount;i++){
     mass.push(i)
    }
    return(
        <>
           {mass.map(p=>{
               return <span
                className={props.currentPage===p&&'selectPages'}
                 onClick={(e)=>{props.onPageChange(p)}}
               >{p}</span>
           })
            }
          {
             props.users.map(u=><div>
               <span>
                 <div className="one" >
                   <img src='https://e7.pngegg.com/pngimages/529/832/png-clipart-computer-icons-avatar-user-profile-avatar-blue-heroes.png' className="userphoto" alt='картинка'/>
               </div>
                 <div>
                   {u.followers
                 ?<button onClick={()=>{props.unfollow(u.id)}}>unfollow</button>
                   :<button  onClick={()=>{props.follow(u.id)}}>follows</button>
                  }
                  
                 </div>
            </span>
               <span>
               <span>
                   <div>{u.followed}</div>
                   <div>{u.name}</div>
               <div>{u.status}</div>
                 </span>
               
             </span>
             </div>
             
            )
          }
        
          
        </>
    )
}
export default User0;