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

function PopUpUser(){
    return(
        <>
            <div
    data-popover=""
    id="popover-user-profile"
    role="tooltip"
    className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
  >
    <div className="p-3">
      <div className="flex items-center justify-between mb-2">
        <a href="#">
          <img
            className="w-10 h-10 rounded-full"
            src="/docs/images/people/profile-picture-1.jpg"
            alt="Jese Leos"
          />
        </a>
        <div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Follow
          </button>
        </div>
      </div>
      <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
        <a href="#">Jese Leos</a>
      </p>
      <p className="mb-3 text-sm font-normal">
        <a href="#" className="hover:underline">
          @jeseleos
        </a>
      </p>
      <p className="mb-4 text-sm">
        Open-source contributor. Building{" "}
        <a
          href="#"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          flowbite.com
        </a>
        .
      </p>
      <ul className="flex text-sm">
        <li className="mr-2">
          <a href="#" className="hover:underline">
            <span className="font-semibold text-gray-900 dark:text-white">
              799
            </span>
            <span>Following</span>
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            <span className="font-semibold text-gray-900 dark:text-white">
              3,758
            </span>
            <span>Followers</span>
          </a>
        </li>
      </ul>
    </div>
    <div data-popper-arrow="" />
  </div>
        </>
    )
}

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
                        <p className="text-medium sm:fon-small md:font-medium hover:text-sky-700 truncate ">
                           <button> {name} </button>
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