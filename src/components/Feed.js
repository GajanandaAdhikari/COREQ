import PostBox from "./PostBox";
import ShowPostUser from "./ShowPostUser";
import FriendSuggestion from "./FriendSuggestion";
import TopProjects from "./TopProjects";
import TopResearchArticles from "./TopResearchArticles";
import SideBar from "./SideBar";

function Feed(){
    return(
        <>
  
    <div className="block grid-container grid sm:grid-flow-col auto-cols-max  lg:grid-cols-8  box-decoration-clone bg-gradient-to-r from-blue-50 to-gray-50 from-gray-50 to-blue-50 object-fill">
    <div className="mt-30 w-fit sm:grid-flow-col auto-cols-max  lg:col-span-2  ">
            <SideBar></SideBar>
            
            
        </div>
    
    <div className="sm:grid-flow-col auto-cols-max lg:col-span-4 mt-20 w-full ml-0 pl-0  box-decoration-clone bg-gradient-to-r from-black-300 to-red-100 object-fill">
        <PostBox></PostBox>
        <div className=" mt-20 overflow-y-scroll  h-[700px] ">
        <ShowPostUser></ShowPostUser>
        </div>
        </div>
        
        <div className="sm:col-span-1 lg:col-span-2 overflow-y-scroll  h-[1100px]   ">
        <div className="block justify-left   lg:mt-20 ">
        <FriendSuggestion/>
        </div>
        <div className="flex justify-left  lg:mt-5">
        <TopProjects/>
        </div>
        <div className="flex justify-left   lg:mt-5">
        <TopResearchArticles/>
        </div>
    </div>
       
    </div>
        </>
    )
}

export default Feed;