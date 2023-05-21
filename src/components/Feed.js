import PostBox from "./PostBox";
import ShowPost from "./ShowPost";

function Feed(){
    return(
        <>
        <div className="mt-10">
        <PostBox></PostBox>
        <ShowPost></ShowPost>
        </div>
       
        </>
    )
}

export default Feed;