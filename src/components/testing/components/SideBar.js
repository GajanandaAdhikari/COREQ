import Home from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Side({title,Icon,page}){
    return(
        <div className='pt-9 2xl:pt-20 max-sm:ml-4 '>
           <a href='src/pages/Login.js ' className=''> <h1 className='md:text-md lg:text-lg 2xl:text-3xl font-semibold hover:text-sky-700'><Icon className=" mr-6  " sx={{fontSize:30}} ></Icon><span className='hidden  sm:inline-flex '>{title}</span></h1></a>
        </div>
    )
   
}



const side = [
    {Icon:Home, title:"Home",page:""},
    {Icon:MenuBookIcon ,title:"Articles",page:""},
    {Icon:PsychologyIcon ,title:"Projects",page:""},
    {Icon:QuestionAnswerIcon ,title:"Queries",page:""},
    {Icon:PostAddIcon,title:"Archive",page:""},

    // {Icon:AccountCircleIcon,title:"Profile"}
    

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
        </>
    )
}

export default SideBar;