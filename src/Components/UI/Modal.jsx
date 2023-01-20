import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./modal.css";

import { RxCross2 } from "react-icons/rx";

const Overlay = () => {
  return <div className="overlay" />;
};

const ModalOverlay = (props) => {
  return (
    <div className="card modal">
      <header className="header">
        <button onClick={props.onClick} className="modal-btn">
          <RxCross2 />
        </button>
        <h4>{props.title}</h4>
      </header>
      <div className="content">{props.children}</div>
      <footer className="actions"></footer>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Overlay />,
        document.querySelector("#overlay-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        >
          {props.children}
        </ModalOverlay>,
        document.querySelector("#modal-root")
      )}
    </Fragment>
  );
};

export default Modal;
