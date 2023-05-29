// import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import SignupPage from './pages/Signup';
// import LoginPage from './pages/Login';
// import CardProfile from './Components/ProfilePictureUpload';



import QueriesPage from "./pages/QueriesPage";
import Feed from "./pages/Feed";
import Article from "./pages/Article";
import Project from "./pages/Project";
import Archive from "./pages/Archive";

// function App() {
//   return (
//     <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//     <div className="max-w-md w-full space-y-8">
//       {/* <CardProfile></CardProfile> */}
//      <BrowserRouter>
//         <Routes>
//             {/* <Route path="/" element={<LoginPage/>} />
//             <Route path="/signup" element={<SignupPage/>} /> */}
//             <Route path="/" element={<Landing/>} />
           
//         </Routes>
//         {/* <Landing></Landing> */}
        
//       </BrowserRouter>
    
//     </div>
//   </div>
//   );
// }


function App() {
  return (
    <div className="">
    <div className="">
      
     <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} /> */}
            <Route path="/" exact element={<Feed/>} />
            <Route path="/query" exact element={<QueriesPage/>} />
            <Route path="/articles" exact element={<Article/>} />
            <Route path="/projects" exact element={<Project/>} />
            <Route path="/archive" exact element={<Archive/>} />
           
        </Routes>
        {/* <Landing></Landing> */}
        
      </BrowserRouter>
    
    </div>
  </div>
  );
}

export default App;
