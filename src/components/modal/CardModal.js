import "./cardModal.css";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import formatNumbersDot from "../../utils/formatNumbersDot";

export default function CardModal({ modalIsOpen, closeModal, modalInfo }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      className={{
        base: "modal-base",
        afterOpen: "modal-base__after__open",
        beforeClose: "modal-base__before__close",
      }}
      overlayClassName={{
        base: "overlay-base",
        afterOpen: "overlay-base__after__open",
        beforeClose: "overlay-base__before__close",
      }}
      shouldCloseOnOverlayClick={true}
    >
      <div className="close-button">
        <IoMdClose
          onClick={closeModal}
          style={{ fontSize: "35px", color: "#424242" }}
        />
      </div>
      <section className="modal-interior">
        <img
          className="modal-interior__image"
          src={modalInfo?.defaultphoto}
          alt={modalInfo?.make}
        />
        <div>
          <h2 className="modal-interior__car__info">
            {modalInfo?.make} {modalInfo?.model}
          </h2>
          <h3 className="modal-interior__car__price">
            {formatNumbersDot(modalInfo?.price)} €
          </h3>
          <button className="modal-interior__buy">Comprar</button>
        </div>
      </section>
    </Modal>
  );
}
