import { useMutation } from "@apollo/client"
import { useRef, useState } from "react"
import { Spinner } from "react-bootstrap"
import { ADD_COMMENT, fetchComments } from "../assets/schemes"
import { toastColorType } from "../assets/types"
import Notify from "./Notify"

interface IForm {
  login: string
  id: string
  repo: string
  num: string
}

const Form: React.FC<IForm> = ({ id, login, repo, num }) => {
  const [toast, setToast] = useState<boolean>(false)
  const [toastText, setToastText] = useState<string>('')
  const [toastColor, setToastColor] = useState<toastColorType>('light')
  const [newCom, setNewCom] = useState<string>('')
  const ref = useRef<HTMLTextAreaElement>(null)

  const GET_COMMENTS = fetchComments(login, repo!, Number(num))
  const [ addComFunc, { loading } ] = useMutation(ADD_COMMENT, {
    refetchQueries: [
      { query: GET_COMMENTS },
      'GetComments'
    ]
  })

  // Add new comment
  const addComment = async (e: any) => {
    e.preventDefault()
    if ( newCom.length > 4 ) {
      addComFunc({
        variables: {
          input: {
            subjectId: id,
            body: newCom
          }
        }
      })
      setNewCom('')
      setToast(true)
      setToastText('Your comment has just been added.')
      setToastColor('light')
      ref.current!.value = ''
    } else {
      setToast(true)
      setToastText('Comment must have at least 5 characters and must not be empty.')
      setToastColor('danger')
    }
  }

  return (
    <>
      <div className="comment-form">
        <h3>Add comment</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Comment text"
            onChange={e => setNewCom(e.target.value)}
            ref={ref}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={addComment}>
          Add comment
          {loading && <Spinner size="sm" className="ms-2"></Spinner>}
        </button>
      </div>

      <Notify close={() => setToast(false)} show={toast} text={toastText} color={toastColor} />
    </>
  )
}

export default Form