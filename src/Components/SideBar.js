import Home from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Login from './Login';
import UserName from './UserName';

function Side({title,Icon,page}){
    return(
        
        <div className=' mt-10  ml-20 pl-20 '>
           <a href='src/pages/Login.js ' className=''> <h1 className='text-sm font-semibold hover:text-sky-700'><Icon className=" mr-6  " sx={{fontSize:40}} ></Icon><span className='hidden  sm:inline-flex '>{title}</span></h1></a>
        </div>
    )
   
}



const side = [
    {Icon:Home, title:"Home",page:""},
    {Icon:PostAddIcon,title:"Post",page:""},
    {Icon:MenuBookIcon ,title:"Articles",page:""},
    {Icon:PsychologyIcon ,title:"Projects",page:""},
    {Icon:QuestionAnswerIcon ,title:"Queries",page:""},
    {Icon:AccountCircleIcon,title:"Profile"}
    

];

function SideBar(){
    return(
        <>
        {
            side.map(nav=><Side
                Icon={nav.Icon}
                title={nav.title}
                page={nav.page}
                ></Side>)
        }
        <div className=''>
         <UserName></UserName>
        </div>
        </>
    )
}

export default SideBar;