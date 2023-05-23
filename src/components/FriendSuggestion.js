// import Button from '@mui/material-next/Button';
import Button from '@mui/material/Button';

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
                    name={user.name}
                    userName={user.userName}
                    userImage={user.userImage}
                    ></SuggestedFriend>)
            }
        </div>
    )
}

function SuggestedFriend({name,userName,userImage}){
    return(
        <>
        <li className="py-3 sm:py-4 ">
                <div className="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={userImage}/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p className="text-medium sm:font-small md:font-medium hover:text-sky-700 truncate ">
                            {name}
                        </p>
                        <p className="text-sm text-gray-700 truncate dark:text-gray-700">
                            @{userName}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <Button variant="text">Follow</Button>
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

<div class="w-full max-w-md  p-4  border border-gray-200 rounded-lg shadow sm:p-8 ">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none  ">Friend Suggestions</h5>
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