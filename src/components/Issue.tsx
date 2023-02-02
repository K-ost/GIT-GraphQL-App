import { Link, useParams } from "react-router-dom"
import { IssueType } from "../assets/types"

interface IIssue {
  data: IssueType
}

const Issue: React.FC<IIssue> = ({ data }) => {
  const { repo } = useParams()

  return (
    <div className="issue">
      <h3><Link to={`/${repo}/${data.number}`} property="dada">{data.title}</Link></h3>
      <div className="issue-text" dangerouslySetInnerHTML={{__html: data.bodyHTML}}></div>
      <div className="issue-comments">
        Comments: {data.comments.edges.length}
      </div>
    </div>
  )
}

export default Issue