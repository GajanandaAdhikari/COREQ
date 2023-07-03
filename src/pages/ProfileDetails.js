import '../css/ProfileDetails.css'

const cover = ["https://www.w3schools.com/howto/img_avatar.png"]
function ProfileDetails() {
  return (
    <div>
      <img src={cover[0]} alt="Avatar" className="avatar" />
    </div>
  )
}
export default ProfileDetails;