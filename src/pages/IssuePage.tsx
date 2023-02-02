import { useQuery } from "@apollo/client"
import { Link, useParams } from "react-router-dom"
import { fetchComments } from "../assets/schemes"
import { CommentTypeNode } from "../assets/types"
import Comments from "../components/Comments"
import Form from "../components/Form"
import SkeletsSimple from "../components/Skelets/SkeletsSimple"

interface IIssuePage {
  login: string
}

const IssuePage: React.FC<IIssuePage> = ({ login }) => {
  const { num, repo } = useParams()
  const GET_COMMENTS = fetchComments(login, repo!, Number(num))
  const { data, loading, error } = useQuery(GET_COMMENTS)
  
  if (loading) {
    return <SkeletsSimple />
  }
  if (error) {
    return <div className="alert alert-danger">{error.message}</div>
  }
  const { id, title } = data.user.repository.issue
  const comments: CommentTypeNode[] = data.user.repository.issue.comments.edges


  return (
    <div className="container">
      <h1>Issue - "{title}" (Repository: {repo})</h1>

      <div className="mb-4">
        <Link to="/" className="btn btn-outline-primary">Back to home page</Link>
      </div>

      {comments.length
        ? comments.map(el => <Comments key={el.node.id} data={el.node} />)
        : 'There are no comments yet.'
      }
      
      <Form id={id} repo={repo!} login={login} num={num!} />
    </div>
  )
}

export default IssuePage