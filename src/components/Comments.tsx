import { CommentType } from "../assets/types"

interface IComment {
  data: CommentType
}

const Comments: React.FC<IComment> = ({ data }) => {
  return (
    <div className="comment">
      <div className="comment-ava">
        <img src={data.author.avatarUrl} alt="" />
        <p>{data.author.login}</p>
      </div>
      <div className="comment-body">
        <div className="comment-date">{data.createdAt}</div>
        <div className="comment-text" dangerouslySetInnerHTML={{__html: data.bodyHTML}}></div>
      </div>
    </div>
  )
}

export default Comments