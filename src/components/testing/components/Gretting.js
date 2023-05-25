import CurrentUserData from '../../localDatabase/CurrentUserData.json';

function UserName({name,userName,userImage}){
   
    return(

  <div class="max-w-md rounded-3xl block flex-grow border-b border-gray-300 pb-2">
    <div class="rounded-[calc(1.5rem-1px)] ">
        <h1 className='md:text-[40px]'>Namaste,</h1>
      <div class="flex gap-4 items-center ">
        
        <div>
          <h3 class="max-sm:text-[12px] md:text-[30px]  truncate">{name}</h3>
          <span class="max-sm:text-[9px] md:text-[20px] tracking-wide text-gray-600">@{userName}</span>
        </div>
        <img class="max-sm:h-7 max-sm:w-7 ml-3 h-10 w-10 rounded-full " src={userImage} alt="" />
      </div>
    </div>
  </div>

    )
}

function Gretting(){
    return(
        <div>
            {
                CurrentUserData.map(user=><UserName
                    name={user.name}
                    userName={user.userName}
                    userImage={user.profileImage}
                    ></UserName>)
            }
        </div>
    )
}



export default Gretting;