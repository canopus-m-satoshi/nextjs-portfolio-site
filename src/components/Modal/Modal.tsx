import { RxCross2 } from 'react-icons/rx'
import ReactModal from 'react-modal'

import Form from '../Form/Form'

type Props = {
  isOpen: boolean
}

ReactModal.setAppElement('html')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    paddingInline: '10px',
  },
}

const Modal = ({ isOpen }: Props) => {
  const handleCloseModal = () => {}

  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      contentLabel="フォームモーダル"
      onRequestClose={handleCloseModal}>
      <button onClick={handleCloseModal} className="absolute top-2 right-2">
        <RxCross2 />
      </button>

      <Form />
    </ReactModal>
  )
}
export default Modal
