
import SideBar from "../components/SideBar";
import UserName from "../components/UserName";
function Landing(){
    return(
        <div className="mt-40">
         
        <div className="mt-30 pl-6">
            <SideBar></SideBar>
            <UserName></UserName>
            
        </div>
        </div>
    )
}

export default Landing;