// import Button from '@mui/material-next/Button';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const users=[
    {
        name:"Nischal Khanal", 
        userName:"Hunter420",
        userImage:"https://avatars.githubusercontent.com/u/92971596?s=120&v=4"
    },
    {
        name:"Ujjwal Dhakal",
        userName:"ujjwalnp",
        userImage:"https://avatars.githubusercontent.com/u/68050149?s=120&v=4"
    },
    {
        name:"Gazananda Mani Adhikari",
        userName:"cosmicGZ",
        userImage:"https://avatars.githubusercontent.com/u/90420230?s=120&v=4"
    }
];


function FriendSuggestionList(){
    return(
        <div>
            {
                users.map(user=><SuggestedFriend
                    userFullName={user.name}
                    userName={user.userName}
                    userImage={user.userImage}
                    ></SuggestedFriend>)
            }
        </div>
    )
}

function SuggestedFriend({userFullName,userName,userImage}){
    return(
        <>
        <li className="py-2 ">
                <div className="flex items-left space-x-4">
                    <div class="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={userImage}/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p className=" md:text-[20px] 2xl:text-[20px]  hover:text-sky-700  ">
                        <Link to="/profile"> <span className="">{userFullName}</span></Link>
                        </p>
                        <p className="text-[16px] text-gray-700 dark:text-gray-700">
                            @{userName}
                        </p>
                        
                    </div>
                    <div className="inline-flex md:text-2xl font-semibold text-gray-900 dark:text-white">
                    <Button variant="text"  size="large">Follow</Button>
                    </div>
                </div>
            </li>
        </>
    )
}

function FriendSuggestion(){
    return(
        <>
        <div className="flex">

<div class="max-sm:w-[175px] md:w-[180px] lg:w-[240px]  2xl:w-[376px]  p-1  border border-gray-200 rounded-lg shadow  ">
    <div class="flex items-center justify-between mb-4">
        <h5 class=" md:text-md lg:text-lg 2xl:text-3xl  font-bold leading-none  ">Friend Suggestions</h5>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <FriendSuggestionList/>
                    </ul>
   </div>
</div>
</div>
        </>
    )
}

export default FriendSuggestion;