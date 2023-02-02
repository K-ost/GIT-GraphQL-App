import { Toast, ToastContainer } from "react-bootstrap"
import { toastColorType } from "../assets/types"

interface INotify {
  show: boolean
  close: () => void
  text: string
  color: toastColorType
}

const Notify: React.FC<INotify> = ({ close, color, show, text }) => {
  return (
    <ToastContainer position="bottom-end" className="p-3">
      <Toast show={show} onClose={close} autohide delay={5000} bg={color}>
        <Toast.Header>
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body className={color === 'danger' ? 'text-white' : ''}>{text}</Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default Notify