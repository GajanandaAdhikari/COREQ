import PostBox from "./PostBox";
import ShowPost from "./Vote";
import FriendSuggestion from "./FriendSuggestion";

function Feed(){
    return(
        <>
  
    <div className="flex grid grid-cols-2 col-span-6  gap-x-60 ">
    <div className="mt-20 ml-20 pl-10 ">
        <PostBox></PostBox>
        <ShowPost></ShowPost>
        </div>
        <div className="pl-20 ">
        <div className="flex justify-left gap-60 ml-20 lg:mt-20">
        <FriendSuggestion/>
        </div>
    </div>
       
    </div>
        </>
    )
}

export default Feed;