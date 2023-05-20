
import SideBar from "../components/SideBar";
import UserName from "../components/UserName";
import Feed from "../components/Feed";
function Landing(){
    return(
        <div className="flex">
        <div className="mt-40 ">
         
        <div className="mt-30 pl-6">
            <SideBar></SideBar>
            
            
        </div>
        </div>
        <Feed></Feed>
        </div>
    )
}

export default Landing;