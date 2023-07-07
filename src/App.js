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



function App() {
  return (
    <div className="">
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
            <Route path="/profile" exact element={<ProfileDetails />} />
            <Route path="/comment" exact element={<CommentPage />} />
            <Route path="/edit" exact element={<EditInformation />} />
            <Route path="/editprofile" exact element={<EditProfile />} />
            <Route path="/sociallink" exact element={<SocialLink />} />
            <Route path="/security" exact element={<Security />} />
           

          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
