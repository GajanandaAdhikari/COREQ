import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import QueriesPage from "./pages/QueriesPage";
import Feed from "./pages/Feed";
import Article from "./pages/Article";
import Project from "./pages/Project";
import Archive from "./pages/Archive";
import StartPage from "./pages/StartPage";
import ProfileDetails from "./pages/ProfileDetails";
import CommentPage from "./pages/CommentPage";
import EditInformation from "./pages/EditInformation";
import EditProfile from "./components/profile/EditProfile"
import SocialLink from "./components/profile/SocialLink"
import Security from "./components/profile/Security"
import ProfileEditSideBar from "./components/profile/ProfileEditSideBar"
import Help from "./components/profile/Help"



function App() {
  return (
    <div className="bg-back-color">
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" exact element={<Feed />} />
            <Route path="/query" exact element={<QueriesPage />} />
            <Route path="/articles" exact element={<Article />} />
            <Route path="/projects" exact element={<Project />} />
            <Route path="/archive" exact element={<Archive />} />
            <Route path="/startpage" exact element={<StartPage />} />
            <Route path="/profile/:userId" exact element={<ProfileDetails />} />
            <Route path="/comment" exact element={<CommentPage />} />
            <Route path="/edit" exact element={<EditInformation />} />
            <Route path="/edit" exact element={<EditProfile />} />
            <Route path="/sociallink" element={<div className="grid grid-cols-10"> <span className="md:col-span-4 xl:col-span-3"><ProfileEditSideBar /> </span><span className="max-md:col-span-6 xl:col-span-7"><SocialLink /></span></div>} />
            <Route path="/security" exact element={<div className="grid grid-cols-10"> <span className="md:col-span-4 xl:col-span-3"><ProfileEditSideBar /> </span><span className="max-md:col-span-6 xl:col-span-7"><Security /></span></div>} />
            <Route path="/help" exact element={<div className="grid grid-cols-10"> <span className="md:col-span-4 xl:col-span-3"><ProfileEditSideBar /> </span><span className="max-md:col-span-6 xl:col-span-7"><Help /></span></div>} />

          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
