import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import "./modal.css"

// import OutlinedButton from './OutlinedButton';

const Overlay = () => {
  return <div className="overlay" />;
};

const ModalOverlay = (props) => {
  return (
    <div className="card modal">
      <header className="header">
        <h4>{props.title}</h4>
      </header>
      <div className="content">{props.children}</div>
      <footer className="actions">
          <button onClick={props.onClick}>Stäng</button>
        </footer>
    
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Overlay />,
        document.querySelector('#overlay-root'),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        >
          {props.children}
        </ModalOverlay>,
        document.querySelector('#modal-root'),
      )}
    </Fragment>
  );
};

export default Modal;