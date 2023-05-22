import { Avatar } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


const users=[
    {
        name:"Nischal Khanal", 
        userName:"Hunter420",
        userImage:"https://avatars.githubusercontent.com/u/92971596?s=120&v=4",
        title:"Learn React in 100 days",
        description:"Learning React in 100 days is an ambitious goal, but with dedication and a structured approach, it is definitely achievable.",
        vote:150
    },
    {
        name:"Ujjwal Dhakal",
        userName:"ujjwalnp",
        userImage:"https://avatars.githubusercontent.com/u/68050149?s=120&v=4",
        title:"Twitter 2.0 using Blockchain Technology",
        description:"A block chain is one of the simplest ways to control your Twitter experience, but it's also the least discerning. When you initiate a block chain for a specific account, you block every person following that account.",
        vote:200
    },
    {
        name:"Gazananda Mani Adhikari",
        userName:"cosmicGZ",
        userImage:"https://avatars.githubusercontent.com/u/90420230?s=120&v=4",
        title:"Advance Searching Algorithm",
        description:"The binary search algorithm works on the principle of divide and conquer and it is considered the best searching algorithm because it's faster to run.",
        vote:499
    }
];




// function Vote(){
//     return(
//         <div className="flex-none">
//             <button ><ArrowDropUpIcon sx={{fontSize:80}}/></button>
//             <h1 className='ml-6 font-bold'>{vote}</h1>
//            <button ><ArrowDropDownIcon sx={{fontSize:80}}/></button>
//         </div>
//     )
// }

function PostUser(){
    return(
        <div>
            {
                users.map(user=><CurrentUser
                    name={user.name}
                    userName={user.userName}
                    userAvatar={user.userImage}
                    title={user.title}
                    description={user.description}
                    vote={user.vote}
                    ></CurrentUser>)
            }
        </div>
    )
}

function CurrentUser({userName,userAvatar,title,description,vote}){
    return(
        <>

        <div className="flex mt-5  block " >
        
            <Avatar src={userAvatar} sx={{width:30,height:30}}/>
            <span className="font-semibold pl-4"><h1>{userName}</h1></span>
        </div>
       <div className="flex ">
       <div className="flex-none">
            <button ><ArrowDropUpIcon sx={{fontSize:80}}/></button>
            <h1 className='ml-6 font-bold'>{vote}</h1>
           <button ><ArrowDropDownIcon sx={{fontSize:80}}/></button>
        </div>
       <p>
        <div className="bg-red-890 object-fill box-border h-[300px]  w-fit  p-4 border-0 bg-gray-0 shadow-lg shadow-indigo-200/100 ">
        <span className="font-bold text-base font-serif lg:text-xl"><h1>{title}</h1></span>
        <br></br>
        <span className="mt-10 font-mono"><p>{description}</p></span>
        </div>
        </p>
       </div>
        </>
    )
}


function ShowPostUser(){
    return(
        <>
        <div className="block">
         
        
           <PostUser/>
        </div>
        </>
    )
}
export default ShowPostUser;