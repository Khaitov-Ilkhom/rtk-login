import {useProfileDataQuery} from "../../../redux/api/profile-api.jsx";

const Profile = () => {
  const {data} = useProfileDataQuery()
  const user = data?.payload
  return (
      <div>
        Profile
        <div>
          <h2>Firstname: {user?.first_name}</h2>
          <p>Role: {user?.role}</p>
          <p>Username: {user?.username}</p>
        </div>
      </div>
  )
}
export default Profile
