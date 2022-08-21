import { Image, Modal } from "react-bootstrap"
import { ButtonComponent } from "../ButtonComponent/ButtonComponent"
import styles from './Modal.module.css'

interface ModalComponentProps {
    title: string
    description: string
    img: string
    open: boolean
    close: () => void
}

export const ModalComponent = ({ title, description, img, open, close }: ModalComponentProps) => {
    return (
        <Modal
            size="lg"
            centered
            className={styles.modal}
            show={open}
            onHide={close}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-between gap-3">
                <Image
                    fluid
                    src={img}
                    className={`w-50 ${styles.img}`}
                />
                <div className='w-50'>
                    <h4>Description</h4>
                    <p className='fs-6'>{description}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <ButtonComponent
                    title={'Close'}
                    btnClick={close}
                    classes={[styles['btn']]}
                />
            </Modal.Footer>
        </Modal>
    )
}
