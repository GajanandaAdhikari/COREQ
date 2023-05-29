import Header from "../Components/Header";
import Signup from "../Components/Signup";
import CardProfile from "../Components/ProfilePictureUpload";

export default function SignupPage(){
    return(
        <>
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <CardProfile></CardProfile>
            <Signup/>
        </>
    )
}