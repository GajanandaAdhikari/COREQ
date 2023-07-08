import { Link } from "react-router-dom";
import '../../css/FAQ.css';

export default function Help() {
  return (
    <>
      <div className="bg-back-color flex-grow h-screen overflow-y-scroll ">
        <div>
          <h3 className="text-2xl font-bold pt-20 pl-20">FAQ</h3>
        </div>
        <div className="w-2/3 max-md:w-full mx-auto mb-10 pt-10">
          <h2 className="faq">Our platform coreQ (Community for Reprising Qualitative Research) aimed at inspiring college students to share their knowledge, innovative ideas, and project files within their college domain. The platform will serve as a hub for students to find peers with various fields of interest, form project teams, and participate in competitions. Additionally, it will address the lack of a digitalized platform for sharing and discussing innovative ideas, providing query assistance, and facilitating communication among students, seniors, peers, and teachers outside of regular coursework.
            The objective is to foster collaboration, showcase projects, and enhance job placement prospects. The proposal outlines specific objectives, such as building a user-friendly website, allowing registration and sharing of research articles and original ideas, facilitating open-source projects, and involving teachers as supervisors and resource providers.
          </h2>
        </div>
        <div className="mx-auto mb-10 border-b border-bcolor w-2/3"></div>
        <div className="w-2/3 mx-auto mb-5 pt-5">
          <input className="text-xl ml-5 mb-10 text-center justify-center shadow appearance-none border border-bcolor rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="feedback" type="text" placeholder="Your valuable feedback" />
        </div>

        <div className="flex justify-center w-2/3 mx-auto">
          <Link to={"/profile"}>
            <button className="inline-flex border mr-10 border-pbcolor bg-white rounded hover:bg-gray-100 text-pbcolor font-bold py-1 px-8">Cancel</button>
          </Link>
          <button className="inline-flex max-sm:mt-3 bg-pbcolor text-white font-bold py-1 px-9 rounded">Save</button>
        </div>
      </div>
    </>
  );
}
