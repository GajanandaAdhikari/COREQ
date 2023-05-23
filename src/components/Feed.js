import PostBox from "./PostBox";
import ShowPostUser from "./ShowPostUser";
import FriendSuggestion from "./FriendSuggestion";
import TopProjects from "./TopProjects";
import TopResearchArticles from "./TopResearchArticles";
import SideBar from "./SideBar";

function Feed(){
    return(
        <>
  
    <div className=" fixed w-screen h-fit grid-container grid  sm:grid-cols-5 lg:grid-cols-8  box-decoration-clone bg-gradient-to-r from-blue-50 to-gray-50 from-gray-50 to-blue-50 object-fill">
    <div className="mt-20 h-screen  sm:col-span-1  lg:col-span-2  ">
            <SideBar></SideBar>
            
            
        </div>
    
    <div className="overflow-y-scroll  h-screen sm:col-span-2 lg:col-span-4 mt-0 w-full ml-0 pl-0  box-decoration-clone bg-gradient-to-r from-black-300 to-red-100 object-fill">
        <div className="mt-5 text-center text-3xl gray-100 font-bold ">
            {/* <a>Home</a> */}
        </div>
        <div className="mt-20">
        <PostBox></PostBox>
        </div>
        <div className=" mt-20  ">
        <ShowPostUser></ShowPostUser>
        </div>
        </div>
        
        <div className="sm:col-span-1 lg:col-span-2 overflow-y-scroll h-screen  lg:mt-20  ">
        <div className="block justify-left   ">
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