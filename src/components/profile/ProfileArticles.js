
import upvote from '../../img/upvote.png';
import downvote from '../../img/downvote.png';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function CommentShow(){
    return(
        <>

        </>
    )
}


function PostShow({name,profileImage,title,description,vote,tag,postDate,author,publicationYear,publicationHouse,keywords}){
    return(
        <>
            <div className='w-full p-4 border border-gray-300 rounded-lg mt-5'>
            <div className='grid grid-rows-13 gap-4 '>
                <div className='row-span-2 grid grid-cols-5 '>
                    <div className='flex col-span-4'>
                        <img className='h-9 w-9 2xl:h-12 2xl:w-12 rounded-full mr-5 max-sm:mr-4  max-sm:h-9 max-sm:w-9' src={profileImage}></img>
                        <div className=''>
                        <a href='' className='2xl:text-[20px]'>{name}</a>
                        <p className='font-k2d 2xl:text-[15px]'>{tag}</p>
                        </div>
                    </div>
                    <div className='col-span-1 '>
                        <h1 className='font-k2d text-sm 2xl:text-[20px] '>{postDate}</h1>
                    </div>
                </div>

                <div className='row-span-1 '>
                    <div className='flex font-bold 2xl:text-[20px]'>
                        <h1>{title}</h1>
                    </div>
                </div>
                <div className=' row-span-1 inline-flex md:text-sm font-k2d italic  max-sm:text-[10px] '>

                       <p>author: {author}</p> 
                       <p className='max-sm:pl-5  md:pl-10 '>- {publicationYear}, {publicationHouse}</p>
                </div>
                <div className='row-span-5 '>
                   <p>{description}</p>
                </div>
                <div className=' row-span-1 inline-flex md:text-sm font-k2d italic  max-sm:text-[10px] flex-grow border-b border-gray-300 2xl:text-[15px] pb-7'>

                <p>keywords: {keywords}</p> 
                </div>
                <div className='row-span-1 flex-grow border-b border-gray-300 grid grid-cols-5 pb-2'>
                <div className='col-span-4 oldstyle-nums font-bold md:text-md ml-5'>
                        <h1>{vote}</h1>
                    </div>
                    <div className='col-span-1 flex pr-4 '>
                        <button><img src={upvote} className='w-7 h-7 mr-4 '></img></button>
                        <button><img src={downvote} className='w-7 h-7 ml-3'></img></button>
                    </div>
                </div>
                <div className='row-span-2 border border-gray-300 rounded-lg p-1 flex'>
                    <h1>Openion!! comming soon</h1>
      {/* <img class="h-9 w-9 rounded-full mr-10 max-sm:mr-4 max-sm:ml-4 max-sm:h-9 max-sm:w-9" src={profileImage} alt="" />
      <input type="text" id="large-input" placeholder="CLICK HERE TO CIRCULATE ...." class="flex items-start md:text-[24px] max-sm:w-[350px] max-md:w-[350px] lg:w-[600px] 2xl:w-[900px] 2xl:h-[60px]  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    */}
                </div>
           </div>
            </div>
        </>
    )
}

// GET ALL ARTICLES API INTEGRATION
// const GetAllArticles = async() => {
//     try {
//         const response = await axios.get("http://localhost:8000/article", {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//               }
//         });
//     }
//     catch(error) {
//         console.log(error)
//     }
// }

function ProfileArticles() {
    const [articles, setArticles] = useState([]);

    const token = Cookies.get('token');
  
    useEffect(() => {
      const fetchArticles = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/article/user/${Cookies.get('userId')}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
          });
          const articlesData = response.data;
          const formattedArticles = articlesData.map(article => {
            return {
              ...article,
              createdAt: new Date(article.createdAt).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short' }) //, year: 'numeric'
            };
          });
          setArticles(formattedArticles);
        } catch (error) {
          console.log(error);
        }
      };
  
      console.log(fetchArticles());
    }, []);
  
    return (
      <>
        {articles.map((article) => (
          <PostShow
            key={article.id}
            name={article.userFullName}
            profileImage={article.profileImage}
            title={article.title}
            description={article.description}
            vote={article.vote}
            tag={"article"}
            postDate={article.createdAt}
            author={article.authors}
            publicationYear={article.publicationYear}
            publicationHouse={article.publicationHouse}
            keywords={article.keywords}

          />
        ))}
      </>
    );
  }

// function ArticlePostShow(){
//     return(
//         <>
//          {
//                 FeedData.map(user=><PostShow
//                     name={user.name}
//                     userName={user.userName}
//                     profileImage={user.userImage}
//                     title={user.title}
//                     description={user.description}
//                     vote={user.vote}
//                     tag={user.tag}
//                     postDate={user.postDate}
//                     author={user.author}
//                     publicationYear={user.publicationYear}
//                     publicationHouse={user.publicationHouse}
//                     keywords={user.keywords}
//                     ></PostShow>)
//             }
//         </>
//     )
// }

export default ProfileArticles;