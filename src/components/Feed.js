import PostBox from "./PostBox";
import ShowPost from "./Vote";
import FriendSuggestion from "./FriendSuggestion";
import TopProjects from "./TopProjects";
import TopResearchArticles from "./TopResearchArticles";
import SideBar from "./SideBar";

function Feed(){
    return(
        <>
  
    <div className="flex grid grid-cols-3 col-span-6  gap-x-60 ">
    <div className="mt-30  pl-20 ml-20 ">
            <SideBar></SideBar>
            
            
        </div>
    
    <div className="mt-20 ml-0 pl-10 ">
        <PostBox></PostBox>
        <ShowPost></ShowPost>
        </div>
        <div className="pl-20 divide-x divide-solid w-full  ">
        <div className="flex justify-left gap-60 ml-20 lg:mt-20 truncate">
        <FriendSuggestion/>
        </div>
        <div className="flex justify-left gap-60 ml-20 lg:mt-5">
        <TopProjects/>
        </div>
        <div className="flex justify-left gap-60 ml-20 lg:mt-5">
        <TopResearchArticles/>
        </div>
    </div>
       
    </div>
        </>
    )
}

export default Feed;