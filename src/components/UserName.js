import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const users=[
    {
        name:"Nischal Khanal", 
        userName:"Hunter420"
    }
];

function UserName({name,userName}){
    console.log(name);
    return(

        <div>
            {/* <h1>Hello</h1> */}
            <h1>{name}</h1>
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
                    ></UserName>)
            }
        </div>
    )
}

export default User;