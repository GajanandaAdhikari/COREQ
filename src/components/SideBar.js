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
        <div className=' mt-12 pl-5 '>
           <a href='src/pages/Login.js'> <h1 className='text-xl font-semibold hover:text-sky-700'><Icon className="mr-6" sx={{fontSize:40}} ></Icon>{title}</h1></a>
        </div>
    )
   
}



const side = [
    {Icon:Home, title:"Home",page:"src/pages/Login.js"},
    {Icon:PostAddIcon,title:"Post",page:"../pages/home"},
    {Icon:MenuBookIcon ,title:"Research Articles",page:"../pages/home"},
    {Icon:PsychologyIcon ,title:"Projects",page:"../pages/home"},
    {Icon:QuestionAnswerIcon ,title:"QnA",page:"../pages/home"},
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
        <UserName></UserName>
        </>
    )
}

export default SideBar;