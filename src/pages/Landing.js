
import SideBar from "../components/SideBar";
import UserName from "../components/UserName";
import Feed from "../components/Feed";
function Landing(){
    return(
        <div className="flex divide-x divide-solid w-full">
        <div className="mt- ">
         
        <div className="mt-40  pl-6 ">
            <SideBar></SideBar>
            
            
        </div>
        </div>
        <Feed></Feed>
        </div>
    )
}

export default Landing;