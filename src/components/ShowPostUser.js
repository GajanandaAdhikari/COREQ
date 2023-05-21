import { Avatar } from "@mui/material";


const users=[
    {
        name:"Nischal Khanal", 
        userName:"Hunter420",
        userImage:"https://avatars.githubusercontent.com/u/92971596?s=120&v=4",
        title:"Learn React in 100 days",
        description:"This is the easy way to learn react kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
    }
];



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
                    ></CurrentUser>)
            }
        </div>
    )
}

function CurrentUser({userName,userAvatar,title,description}){
    return(
        <>
        <div className="flex">

            <Avatar src={userAvatar} sx={{width:30,height:30}}/>
            <span className="font-semibold pl-4"><h1>{userName}</h1></span>
        </div>
        <p>
        <div className="object-fill box-border h-40  w-96 p-4 border-4 bg-gray-200 shadow-lg shadow-indigo-500/50">
        <span className="font-bold"><h1>{title}</h1></span>
        <span className=""><p>{description}</p></span>
        </div>
        </p>
        </>
    )
}


function ShowPostUser(){
    return(
        <>
        <div className="flex">
           <PostUser/>
        </div>
        </>
    )
}
export default ShowPostUser;