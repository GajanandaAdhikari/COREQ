import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const users=[
    {
        name:"Nischal Khanal", 
        userName:"Hunter420",
        userImage:"https://avatars.githubusercontent.com/u/92971596?s=120&v=4"
    }
];

function UserName({name,userName,userImage}){
   
    return(

       

  <div class="max-w-md rounded-3xl pt-0 md:mt-40  pl-20 ml-14">
    <div class="rounded-[calc(1.5rem-1px)] pl-5">

      <div class="mt-8 flex gap-4 items-center">
        <img class="h-10 w-10 rounded-full" src={userImage} alt="" />
        <div>
          <h3 class="sm:text-sm text-md ">{name}</h3>
          <span class="text-sm tracking-wide text-gray-600">@{userName}</span>
        </div>
      </div>
    </div>
  </div>

    )
}

function User(){
    return(
        <div>
            {
                users.map(user=><UserName
                    name={user.name}
                    userName={user.userName}
                    userImage={user.userImage}
                    ></UserName>)
            }
        </div>
    )
}

export default User;