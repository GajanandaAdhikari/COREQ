import React from "react";
import SideBar from "../components/SideBar";
import Home from '@mui/icons-material/Home';


const Side = [
    {icons : Home, title:"Home"}
    // {icons : "", title:'Post'},
    // {icons : "", title:'Research Articles'},
    // {icons : "", title:'Projects'},
    // {icons : "", title:'QnA'}
];
function SideBarDetails(){
 
    return(
            <>
                {
                    Side.map(nav=><SideBar
                        title={nav.title}
                        ></SideBar>)
                }
            </>
    )
}

export default SideBarDetails;


