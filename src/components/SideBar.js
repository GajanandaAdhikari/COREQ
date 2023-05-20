import Home from '@mui/icons-material/Home';

function Side({title,Icon}){
    return(
        <div className=''>
            <h1 className='text-3xl font-semibold'><Icon className="mr-6" sx={{fontSize:40}} ></Icon>{title}</h1>
        </div>
    )
}

const side = [
    {Icon:Home, title:"Home"}
    // {title:"Chat"},
    // {title:"Notification"}

];

function SideBar(){
    return(
        <>
        {
            side.map(nav=><Side
                Icon={nav.Icon}
                title={nav.title}
                ></Side>)
        }
        </>
    )
}

export default SideBar;