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
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
