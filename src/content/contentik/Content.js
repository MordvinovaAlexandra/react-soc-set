import MyPost from '../contentik/MyPost/MyPost'
import ProfileInfo from "./profileInfo/ProfileInfo";
function Content (props)
{
    console.log(props.post)
    return(
    <div className="content">
        <ProfileInfo/>
    <MyPost 
    neww={props.newPost}
    dispatch={props.dispatch}
    post={props.post}

    />
   
    </div>
    )
}
export default Content;