import MyPost from '../contentik/MyPost/MyPost'
import MyPostContainer from './MyPost/MypostContainer';
import ProfileInfo from "./profileInfo/ProfileInfo";
function Content (props)
{
  
    return(
    <div className="content">
    <ProfileInfo/>
    <MyPostContainer/>
   
    </div>
    )
}
export default Content;