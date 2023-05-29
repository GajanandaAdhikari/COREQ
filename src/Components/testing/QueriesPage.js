import Gretting from "../../components/Gretting";
import Search from "../../components/Search";
import SideBar from "../../components/SideBar";
import FriendSuggestion from "../../components/FriendSuggestion";
import TopProjects from "../../components/TopProjects";
import TopResearchArticles from "../../components/TopResearchArticles";
import CirculateQueries from "../../components/CirculateQueries";
import QueryPostShow from "../../components/QueryPostShow";
import Coreq from "./img/coreq.png";

function QueriesPage() {
  return (
    <>
      <div className="font-sans bg-back-color overflow-hidden h-screen p-5 ">
        <div className="grid md:grid-cols-5 sm:grid-cols-5 ">
            {/* top bar  */}
            <div className=" ">
              {/* gretting  */}
              <Gretting />
            </div>
            <div className="md:col-span-3 sm:col-span-4 text-center font-mono  font-bold max-sm:hidden md:text-[40px] lg:text-[50px]">{/* section name or icon on the top  */}<h1>Queries</h1></div>
            <div className="max-sm:col-start-4">{/* search  */}
            <Search/>
            </div>
        </div>
       

 {/* whole page  */}
 <div className="grid md:grid-cols-5 h-screen max-sm:h-[30px] max-sm:grid-cols-5 ">
          {/* whole page grid 3 -cols  */}

          <div className="grid md:grid-rows-6 ">
            {/* SideBar cols  */}
            {/* <h1>sidebar</h1> */}
            
            <div className="max-sm:inline-flex md:row-span-3 md:ml-10">{/* nav bar  */}<SideBar/></div>
            <div className="max-sm:hidden md:ml-10">
              {/* <img className="md:w-[110px] md:h-[110px] lg:w-[110px] lg:h-[110px]  2xl:w-[110px] 2xl:h-[110px]" src={Coreq}></img> */}
            </div>
          </div>

          <div className="md:col-span-3 max-sm:col-span-5 max-sm:col-start-1 max-sm:overflow-scroll max-sm:h-[600px] md:overflow-y-scroll md:h-[540px] 2xl:h-[760px]  ">
            {/* feed section */}
            {/* <h1>feed</h1>    */}
            
            <div className="2xl:pl-20">
            <CirculateQueries/>
            </div>
            <div className="2xl:pl-20">{/* show post  */}
            <QueryPostShow/>
            </div>
          </div>
            
          <div className="max-sm:hidden grid  overflow-y-scroll md:h-[540px] 2xl:h-[760px] ">
            {/* show top results  */}
            {/* <h1>top result</h1> */}
            
            <div className="pt-3 relative">{/* friend suggestion  */} <FriendSuggestion/> </div>
            <div className="pt-3 relative ">{/* top articles  */} <TopResearchArticles/></div>
            <div className="pt-3 relative">{/* top projects */}<TopProjects/></div>
            {/* <div className="pt-3 relative">friend suggestion  <FriendSuggestion/> </div> */}
          </div>
        </div>

       
      </div>
    </>
  );
}

export default QueriesPage;
