import ShowPostUser from "./ShowPostUser";
import Vote from "./Vote";

function ShowPost(){
    return(
        <>
            <div className="flex mt-20 ">
                <Vote></Vote>
                <ShowPostUser/>
            </div>
        </>
    )
}

export default ShowPost;