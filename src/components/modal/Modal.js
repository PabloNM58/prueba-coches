import "./modal.css";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import formatNumbersDot from "../../utils/formatNumbersDot";

export default function CardModal({ modalIsOpen, setModalIsOpen, modalInfo }) {
  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      className={{
        base: "modal-base",
        afterOpen: "modal-base_after-open",
        beforeClose: "modal-base_before-close",
      }}
      overlayClassName={{
        base: "overlay-base",
        afterOpen: "overlay-base_after-open",
        beforeClose: "overlay-base_before-close",
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
          className="modal-image"
          src={modalInfo?.defaultphoto}
          alt={modalInfo?.make}
        />
        <div>
          <h2 className="car-info">
            {modalInfo?.make} {modalInfo?.model}
          </h2>
          <h3 className="car-price">{formatNumbersDot(modalInfo?.price)} €</h3>
          <button className="modal-button">Comprar</button>
        </div>
      </section>
    </Modal>
  );
}
