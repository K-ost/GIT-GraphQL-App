import { Link } from "react-router-dom"
import { RepoType } from "../assets/types"

interface IRepo {
  data: RepoType
}

const Repo: React.FC<IRepo> = ({ data }) => {
  return (
    <div className="issue">
      <h3><Link to={`/${data.name}`}>{data.name}</Link></h3>
    </div>
  )
}

export default Repo