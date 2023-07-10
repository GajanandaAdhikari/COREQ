import upvote from '../../img/upvote.png';
import downvote from '../../img/downvote.png';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Archive } from '@mui/icons-material';

function CommentShow() {
  return (
    <>

    </>
  )
}


function PostShow({ name, profileImage, title, description, vote, tag, postDate, author, team, keywords }) {
  return (
    <>
      <div className=' max-sm:w-[350px] max-md:w-[350px] lg:w-[600px] 2xl:w-[900px]  p-4 border border-gray-300 rounded-lg mt-5'>
        <div className='grid grid-rows-13 gap-4 '>
          <div className='row-span-2 grid grid-cols-5 '>
            <div className='flex col-span-4'>
              <img className='h-9 w-9 2xl:h-12 2xl:w-12 rounded-full mr-5 max-sm:mr-4  max-sm:h-9 max-sm:w-9' src={profileImage}></img>
              <div className=''>
                <a href='' className='2xl:text-[20px]'>{name}</a>
                <p className='font-k2d 2xl:text-[15px]'>{tag}</p>
                <p className='font-k2d 2xl:text-[15px]'>{team}</p>
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

function ArchiveShow() {
  const [archive, setArchive] = useState([]);

  const token = Cookies.get('token');

  useEffect(() => {
    const fetchArchive = async () => {
      try {
        const response = await axios.get("http://localhost:8000/archive", {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        const archiveData = response.data;
        const formattedArchives = archiveData.map(archive => {
          return {
            ...archive,
            createdAt: new Date(archive.createdAt).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short' }) //, year: 'numeric'
          };
        });
        setArchive(formattedArchives);

      } catch (error) {
        console.log(error);
      }
    };

    fetchArchive();
  }, []);

  return (
    <>
      {archive.map((archive) => (
        <PostShow
          key={archive.id}
          name={archive.userFullName}
          profileImage={archive.profileImage}
          title={archive.title}
          description={archive.description}
          vote={archive.vote}
          tag={archive.tag}
          postDate={archive.createdAt}
          author={archive.collabrators}
          publicationYear={archive.publicationYear}
          team={archive.team}
          keywords={archive.keywords}

        /> 
      ))}
    </>
  );
}



export default ArchiveShow;