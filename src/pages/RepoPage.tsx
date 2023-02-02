import { useQuery } from "@apollo/client"
import { Link, useParams } from "react-router-dom"
import { fetchIssues } from "../assets/schemes"
import { IssueTypeNode } from "../assets/types"
import Issue from "../components/Issue"
import SkeletsSimple from "../components/Skelets/SkeletsSimple"

interface IRepoPage {
  login: string
}

const RepoPage: React.FC<IRepoPage> = ({ login }) => {
  const { repo } = useParams()
  const GET_ISSUES = fetchIssues(login, repo!)
  const { data, loading, error } = useQuery(GET_ISSUES)

  if (loading) {
    return <SkeletsSimple />
  }
  if (error) {
    return <div className="alert alert-danger">{error.message}</div>
  }
  const issues: IssueTypeNode[] = data.user.repository.issues.edges

  return (
    <div>
      <h1>Opened issues of repository - "{repo}"</h1>
      <div className="mb-4">
        <Link to="/" className="btn btn-outline-primary">Back to home page</Link>
      </div>
      {issues.length
        ? issues.map(el => <Issue key={el.node.id} data={el.node} />)
        : 'There are not any issues yet.'
      }
    </div>
  )
}

export default RepoPage