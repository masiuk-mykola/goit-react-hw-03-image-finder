import { Overlay, ModalWindow } from './Modal.styled';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

// ({ children, onCloseModal });
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onCloseModal();
      }
    });
  }

  closeModal = e => {
    if (e.target.nodeName === 'DIV') {
      this.props.onCloseModal();
    }
  };
  render() {
    return createPortal(
      <Overlay onClick={this.closeModal}>
        <ModalWindow>{this.props.children}</ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}

// export const Modal = ({ children, onCloseModal }) => {

//   componentDidMount() {
//     window.addEventListener('keydown', e=>{
//       if(e.code === 'Ecape'){
//       onCloseModal();

//       }
//     })
//    }

//   const closeModal = e => {
//     if (e.target.nodeName === 'DIV') {
//       onCloseModal();
//     }
//   };
//   return createPortal(
//     <Overlay onClick={closeModal}>
//       <ModalWindow>{children}</ModalWindow>
//     </Overlay>,
//     modalRoot
//   );
// };
