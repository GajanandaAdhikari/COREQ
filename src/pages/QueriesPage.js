import Gretting from "../components/Static/Gretting";
import Search from "../components/Static/Search";
import SideBar from "../components/Static/SideBar";
import FriendSuggestion from "../components/suggestion/FriendSuggestion";
import TopProjects from "../components/suggestion/TopProjects";
import TopResearchArticles from "../components/suggestion/TopResearchArticles";
import CirculateQueries from "../components/circulate/CirculateQueries";
import QueryPostShow from "../components/showpost/QueryPostShow";

function QueriesPage() {
  return (
    <>
      <div className="font-sans bg-back-color overflow-hidden h-screen p-5 ">
        <div className="grid md:grid-cols-5 sm:grid-cols-5 ">
          <div className=" "><Gretting /></div>
          <div className="md:col-span-3 sm:col-span-4 text-center font-mono  font-bold max-sm:hidden md:text-[40px] lg:text-[50px]">{/* section name or icon on the top  */}<h1>Queries</h1></div>
          <div className="max-sm:col-start-4"><Search /></div>
        </div>


        <div className="grid md:grid-cols-5 h-screen max-sm:h-[30px] max-sm:grid-cols-5 ">
          <div className="grid md:grid-rows-6 ">
            <div className="max-sm:inline-flex md:row-span-3 md:ml-10">{/* nav bar  */}<SideBar /></div>
            <div className="max-sm:hidden md:ml-10"></div>
          </div>

          <div className="md:col-span-3 max-sm:col-span-5 max-sm:col-start-1 max-sm:overflow-scroll max-sm:h-[600px] md:overflow-y-scroll md:h-[540px] 2xl:h-[760px]  ">
            <div className="2xl:pl-20"><CirculateQueries /></div>
            <div className="2xl:pl-20"><QueryPostShow /></div>
          </div>

          <div className="max-sm:hidden grid  overflow-y-scroll md:h-[540px] 2xl:h-[760px] ">
            <div className="pt-3 relative"><FriendSuggestion /> </div>
            <div className="pt-3 relative "> <TopResearchArticles /></div>
            <div className="pt-3 relative"><TopProjects /></div>
          </div>
        </div>


      </div>
    </>
  );
}

export default QueriesPage;
