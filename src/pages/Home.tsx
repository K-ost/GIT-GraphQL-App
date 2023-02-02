import { fetchAllRepos } from "../assets/schemes"
import { useQuery } from "@apollo/client"
import SkeletsSimple from "../components/Skelets/SkeletsSimple"
import { RepoTypeNode } from "../assets/types"
import Repo from "../components/Repo"

interface IHome {
  login: string
}

const Home: React.FC<IHome> = ({ login }) => {
  const GET_ALL_REPOS = fetchAllRepos(login)
  const { data, loading, error } = useQuery(GET_ALL_REPOS)

  if (loading) {
    return <SkeletsSimple />
  }
  if (error) {
    return <div className="alert alert-danger">{error.message}</div>
  }
  const repos: RepoTypeNode[] = data.user.repositories.edges

  return (
    <div>
      <h2>Repositories list</h2>
      {repos.length
        ? repos.map(el => <Repo key={el.node.id} data={el.node} />)
        : 'There are not any repositories yet.'
      }
    </div>
  )
}

export default Home