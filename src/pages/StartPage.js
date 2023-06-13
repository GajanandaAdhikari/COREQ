import Logo from '../img/logo.png';
import TeamImg from '../img/team_avatar_2xl.png';
import '../css/StartPage.css';
import { Link } from 'react-router-dom';

function StartPage(){
    return(
        <div className="grid grid-rows-10 m-5 ">
            <div className="row-span-1 grid grid-cols-10 border-b-4 border-gray-300 ">
               
               <div className="col-span-3">
               <img src={Logo} alt="Logo" border="" className=""/>
                </div>
                <div className="col-span-5 ">
                   
                </div>
                <div className="col-span-2">
                    <div className="grid grid-cols-2">
                        <div className="col-span-1 font-bold text-[25px] text-center mt-2 border-l-4 border-r-4 border-gray-300">
                            <Link to="/login">Login</Link>
                        </div>
                        <div className="col-span-1 font-bold text-[25px] mt-2 text-center">
                            <Link to="/signup">Signup</Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row-span-9 grid grid-cols-2">
                <div className="col-span-1 mt-20 explore">
                <h1>EXPLORE</h1>
                <h1>YOUR</h1>
                <h1>COMMUNITY</h1>
                <h1>DIGITALLY</h1>
                </div>
                <div className="col-span-1 fit TeamImg mt-20">
                <img src={TeamImg} alt="Team" className='w-fit'/>
                </div>
               
            </div>

        </div>
    )
}

export default StartPage;

