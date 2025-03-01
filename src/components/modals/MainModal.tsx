import React, { useEffect,  } from 'react'
import { createPortal } from 'react-dom';
import { ModalContainer, ModalOverlay, ModalText, ModalTitle } from './MainModal.styled';
import { onModalClose } from '../../redux/modal/modalSlice';
import { Contact } from '../../types/contact.model';
import { useAll } from '../../hooks/useAll';
import { useLanguage } from '../../hooks/useLanguage';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import EditContactForm from '../forms/EditContactForm';
import { fakeContact } from '../../data/contact';

interface MainModalProps {
  contact?: Contact
}
const modalRoot = document.getElementById('modal-root');

const MainModal: React.FC<MainModalProps> = (
  {contact}
) => {
  const dispatch = useAppDispatch();
  const lang = useLanguage()
  const {  modalIsOpen } = useAll()

  useEffect(() => {
    const handleBackdropClick =( e:MouseEvent ) => {
      if ((e.target as HTMLElement).classList.contains("modal-backdrop")) {
        dispatch(onModalClose())
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch(onModalClose())
        }
    };

    const body = document.body;
    body.style.overflow = 'hidden';
    document.addEventListener('click', handleBackdropClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
        body.style.overflow = 'unset';
        document.removeEventListener('click', handleBackdropClick);
        document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

    if (!modalRoot) return null;
    return createPortal(
   
        <ModalOverlay 
          className={`modal ${
          modalIsOpen
            ? ['active', 'modal-backdrop'].join(' ')
            : 'modal-backdrop'
            }`}>
          <ModalContainer >
            <ModalTitle> {lang.appTitle } </ModalTitle>
            <ModalText> {lang.updateInfo} </ModalText>

            <EditContactForm 
              contact={ contact || fakeContact } />
          </ModalContainer>
        </ModalOverlay>
      ,
      modalRoot
    )

}

export default MainModal