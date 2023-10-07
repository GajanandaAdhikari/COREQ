import upvote from "../../img/upvote.png";
import downvote from "../../img/downvote.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import PdfViewer from "../Static/PdfViewer";
import PostBar from "../Static/PostBar";


function CommentShow() {
  return <></>;
}

function PostShow({userId, name, profileImage, description, vote, tag, postDate }) {
  return (
    <>
      <div className=" max-sm:w-[350px] max-md:w-[350px] lg:w-[600px] 2xl:w-[900px]  p-4 border border-gray-300 rounded-lg mt-5">
        <div className="grid grid-rows-10 gap-4 ">
          <div className="row-span-2 grid grid-cols-5 ">
            <div className="flex col-span-4">
              <img
                className="h-9 w-9 2xl:h-12 2xl:w-12 rounded-full mr-5 max-sm:mr-4  max-sm:h-9 max-sm:w-9"
                src={profileImage}
              ></img>
              <Link to={`/profile/${userId}`} key={userId}>   <div className="">
                <a href="" className="2xl:text-[25px]">
                  {name}
                </a>
                <p className="font-k2d 2xl:text-[20px]">{tag}</p>
              </div> </Link>
            </div>
            <div className="col-span-1 ">
              <h1 className="font-k2d text-sm 2xl:text-[20px] ">{postDate}</h1>
            </div>
          </div>
          <div className="row-span-5 flex-grow border-b border-gray-300 2xl:text-[20px] pb-7">
            <p>{description}</p>
          </div>
          <div className='row-span-1 flex-grow border-b border-gray-300 grid grid-cols-5 pb-2'>
            <div className='col-span-1 oldstyle-nums font-bold md:text-md ml-5'>
            <h1 className='font-bold md:text-[25px] ml-5'>{vote}</h1>
            </div>
            <div className='col-span-4 flex justify-end oldstyle-nums font-bold md:text-md ml-5'>
            <PostBar userId={userId}/>
            </div>
          </div>
          <div className="row-span-2  p-1 flex">
            <Link to="/comment">
              {" "}
              <input
                type="text"
                id="comment"
                placeholder="Comment Here"
                class="flex items-start md:text-[20px] w-fit 2xl:h-[40px]  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </Link>
            {/* <img class="h-9 w-9 rounded-full mr-10 max-sm:mr-4 max-sm:ml-4 max-sm:h-9 max-sm:w-9" src={profileImage} alt="" />
      <input type="text" id="large-input" placeholder="CLICK HERE TO CIRCULATE ...." class="flex items-start md:text-[24px] max-sm:w-[350px] max-md:w-[350px] lg:w-[600px] 2xl:w-[900px] 2xl:h-[60px]  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    */}
          </div>
        </div>
      </div>
    </>
  );
}

function QueryPostCommentShow() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [queries, setQueries] = useState([]);

  const token = Cookies.get('token');

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get(`${apiUrl}/query`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        const queriesData = response.data;
        const formattedQueries = queriesData.map(query => {
          return {
            ...query,
            createdAt: new Date(query.createdAt).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short' }) //, year: 'numeric'
          };
        });
        setQueries(formattedQueries);

      } catch (error) {
        console.log(error);
      }
    };

    fetchQueries();
  }, []);
  return (
    <>
      {queries.map((user) => (
        <PostShow
          name={user.userFullName}
          userName={user.username}
          profileImage={user.profilePic}
          title={user.title}
          description={user.description}
          vote={user.vote}
          tag={user.tag}
          postDate={user.createdAt}
          userId={user.userId}
        ></PostShow>
      ))}
    </>
  );
}

export default QueryPostCommentShow;
