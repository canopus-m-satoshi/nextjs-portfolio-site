import { RxCross2 } from 'react-icons/rx'
import ReactModal from 'react-modal'

import Form from '../Form/Form'
import styles from './Modal.module.css'

type Props = {
  title: string
  isOpen: boolean
  handleCloseModal: () => void
}

ReactModal.setAppElement('html')

const Modal = ({ title, isOpen, handleCloseModal }: Props) => {
  return (
    <ReactModal
      isOpen={isOpen}
      className={styles.modal}
      overlayClassName={styles.overlay}
      contentLabel="モーダル"
      onRequestClose={handleCloseModal}>
      <h3 className={styles.title}>{title}</h3>
      <button onClick={handleCloseModal} className={styles.closeButton}>
        <RxCross2 className={styles.closeIcon} />
      </button>

      <Form />
    </ReactModal>
  )
}
export default Modal
