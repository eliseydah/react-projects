import "./ModalComponent.css";
function ModalComponent(props) {
  return (
    <div className="modalBackground">
      <div className="modalActive">
        <button className="modalClose" onClick={props.onClose}>
          <img
            className="cross"
            src="../images/cross.svg"
            width="30px"
            height="30px"
          />
        </button>
        <div className="modalWindow">
          <p className="modal-paragraph"> Do You want to buy the plants? </p>
        </div>
        <div className="button-container">
          <button className="order-button"> Order Now</button>
          <button className="go-back-button" onClick={props.onClose}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
export default ModalComponent;
