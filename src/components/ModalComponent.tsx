import { Image, Modal } from "react-bootstrap"
import { ButtonComponent } from "./ButtonComponent"

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
            className='modal'
            show={open}
            onHide={close}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex gap-3">
                <Image
                    fluid
                    src={img}
                    className="modal-img"
                />
                <div className='w-50'>
                    <h4>Ingredients</h4>
                    <p className='fs-5'>{description}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <ButtonComponent
                    title={'Close'}
                    btnClick={close}
                    classes={['modal-btn']}
                />
            </Modal.Footer>
        </Modal>
    )
}
