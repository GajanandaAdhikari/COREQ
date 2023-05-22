// import Button from '@mui/material-next/Button';
import Button from '@mui/material/Button';

const users=[
    {
        name:"Nischal Khanal", 
        userName:"Hunter420",
        userImage:"https://avatars.githubusercontent.com/u/92971596?s=120&v=4",
        title:"Store one human gene information to another human"
    },
    {
        name:"Ujjwal Dhakal",
        userName:"ujjwalnp",
        userImage:"https://avatars.githubusercontent.com/u/68050149?s=120&v=4",
        title:"Self driving motorcycle"
    },
    {
        name:"Gazananda Mani Adhikari",
        userName:"cosmicGZ",
        userImage:"https://avatars.githubusercontent.com/u/90420230?s=120&v=4",
        title:"Quantum Computing and it's benifits"
    }
];

function TopResearchArticlesList(){
    return(
        <div>
            {
                users.map(user=><SuggestedResearchArticles
                    name={user.name}
                    userName={user.userName}
                    userImage={user.userImage}
                    projTitle={user.title}
                    ></SuggestedResearchArticles>)
            }
        </div>
    )
}

function SuggestedResearchArticles({name,userName,userImage,projTitle}){
    return(
        <>
        <li className="py-3 sm:py-4 ">
                <div className="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={userImage}/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <h1 className='antialiased font-semibold hover:text-purple-700 text-lg'>{projTitle}</h1>
                        <p className="text-sm sm:font-medium md:font-xl  truncate hover:text-sky-700">
                            {name} <span className="text-sm text-gray-700 truncate dark:text-gray-700">@{userName}</span>
                        </p>
                        {/* <p className="text-sm text-gray-700 truncate dark:text-gray-700">
                            @{userName}
                        </p> */}
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <Button variant="text">Visit</Button>
                    </div>
                </div>
            </li>
        </>
    )
}

function TopResearchArticles(){
    return(
        <>
        <div className="flex">

<div class="w-full max-w-md  p-4  border border-gray-200 rounded-lg shadow sm:p-8 ">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none  ">Top Research Articles</h5>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <TopResearchArticlesList/>
                    </ul>
   </div>
</div>
</div>
        </>
    )
}

export default TopResearchArticles;