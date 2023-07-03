import Header from "../components/Header";
import Signup from "../components/Signup";
import CardProfile from "../components/ProfilePictureUpload";

export default function SignupPage(){
    return(
        <>
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/login"
            />
            <CardProfile></CardProfile>
            <Signup/>
        </>
    )
}