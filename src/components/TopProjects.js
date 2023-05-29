// import Button from '@mui/material-next/Button';
import Button from '@mui/material/Button';

const users=[
    {
        name:"Nischal Khanal", 
        userName:"Hunter420",
        userImage:"https://avatars.githubusercontent.com/u/92971596?s=120&v=4",
        title:"Health Risk Analysis"
    },
    {
        name:"Ujjwal Dhakal",
        userName:"ujjwalnp",
        userImage:"https://avatars.githubusercontent.com/u/68050149?s=120&v=4",
        title:"Twitter 2.0 using Blockchain Technology"
    },
    {
        name:"Gazananda Adhikari",
        userName:"cosmicGZ",
        userImage:"https://avatars.githubusercontent.com/u/90420230?s=120&v=4",
        title:"Advance Searching Algorithm"
    }
];

function TopProjectList(){
    return(
        <div>
            {
                users.map(user=><SuggestedProject
                    name={user.name}
                    userName={user.userName}
                    userImage={user.userImage}
                    projTitle={user.title}
                    ></SuggestedProject>)
            }
        </div>
    )
}

function SuggestedProject({name,userName,userImage,projTitle}){
    return(
        <>
        <li className="py-2">
                <div className="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={userImage}/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <h1 className='antialiased  hover:text-purple-700 md:text-[20px] 2xl:text-[20px]'><a href=''>{projTitle}</a></h1>
                        <p className="text-[16px]    hover:text-sky-700">
                            {name} <span className="text-[14px] text-gray-700  dark:text-gray-700">@{userName}</span>
                        </p>
                        {/* <p className="text-sm text-gray-700 truncate dark:text-gray-700">
                            @{userName}
                        </p> */}
                    </div>
                    
                </div>
            </li>
        </>
    )
}

function TopProjects(){
    return(
        <>
        <div className="flex">

<div class="max-sm:w-[175px] md:w-[180px] lg:w-[240px]  2xl:w-[376px] p-1  border border-gray-200 rounded-lg shadow  ">
    <div class="flex items-center justify-between mb-4">
        <h5 class="md:text-md lg:text-lg 2xl:text-3xl font-bold leading-none  ">Top Projects</h5>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <TopProjectList/>
                    </ul>
   </div>
</div>
</div>
        </>
    )
}

export default TopProjects;