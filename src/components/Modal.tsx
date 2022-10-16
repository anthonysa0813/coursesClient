import React from "react";
import { PropChildrenJsx } from "../interfaces";
import { BoxModal, ModalContainer } from "../styles/Modal";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface Prop {
  children: JSX.Element[] | JSX.Element;
  showModalFunc: () => void;
}

const Modal = ({ children, showModalFunc }: Prop) => {
  return (
    <ModalContainer>
      <BoxModal>
        <AiOutlineCloseCircle onClick={showModalFunc} />
        {children}
      </BoxModal>
    </ModalContainer>
  );
};

export default Modal;
