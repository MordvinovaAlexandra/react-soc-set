import "./Post.css";

function Post (props){
    return(
        <>
        <div className="item">
            <img src="https://i.pinimg.com/originals/43/8e/10/438e10b358273d0897fad22e5bda805a.jpg"/>
            {props.massage}
            <div>
            <span>
                like
            </span>
            </div>
        </div>
        </>
    )
}
export default Post;