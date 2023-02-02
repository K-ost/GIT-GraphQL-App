import { useQuery } from "@apollo/client"
import { fetchUser } from "../assets/schemes"
import { UserType } from "../assets/types"
import Skelets from "./Skelets/Skelets"

interface IUser {
  login: string
}

const User: React.FC<IUser> = ({ login }) => {
  const GET_USER = fetchUser(login)
  const { data, loading, error } = useQuery(GET_USER)

  if (loading) {
    return <Skelets />
  }
  if (error) {
    return <div className="alert alert-danger">{error.message}</div>
  }
  const user: UserType = data.user

  return (
    <div>
      <div className="userpage-img">
        <img src={user.avatarUrl} alt="" />
      </div>
      <h1>{user.name}</h1>
      <p>{user.login}</p>
      <div dangerouslySetInnerHTML={{__html: user.bioHTML}}></div>
    </div>
  )
}

export default User