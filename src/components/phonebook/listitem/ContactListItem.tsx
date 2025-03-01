import React from 'react'
import { BtnDelete, BtnEdit, BtnWrapper,  ItemCard, ListItem } from '../contactslist/ContactList.styled';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useLanguage } from '../../../hooks/useLanguage';
import { deleteContact, PB_update_Response } from '../../../redux/contacts/operations';
import { Contact } from '../../../types/contact.model';
import { onModalOpen } from '../../../redux/modal/modalSlice';
import { Notify } from 'notiflix';
import { confirmDelete } from '../../../lib/notifier';
import capitalize from '../../../lib/capitalize';


interface ContactListItemProps{
contact: Contact
}

const ContactListItem:React.FC<ContactListItemProps> = ({contact}) => {
  const dispatch = useAppDispatch();
  const { _id, name, } = contact;
  const lang = useLanguage()

  const handleDelete = () => {

    confirmDelete(`Are you sure you want to delete ${name}?`, name)
  .then((conf) => {
    console.log(conf);
    dispatch(deleteContact(_id))
    .then((res) => {
      console.log(res);
      if(res.type === 'contacts/deleteContact/fulfilled'){
      const delContactName = (res.payload as PB_update_Response).contact.name
      Notify.success(`${lang.cont}  ${capitalize(delContactName)} ${lang.delSuccess}`)

      }
    })
  })
  .catch((rej) =>{
    Notify.info(`${lang.cont} ${capitalize(rej?.name)} ${lang.same}`)
  })
  }
  const handleEdit = () => {
    dispatch(onModalOpen(contact))
  }

  return (
    <>
      <ListItem  >
          <ItemCard className="cardSpan">
            {contact.name}: {contact.number}
          </ItemCard>
        <BtnWrapper className="button-wrapper">
          <BtnEdit type="button" onClick={() => handleEdit()}>
            {lang.edit}
          </BtnEdit>
          <BtnDelete
          type="button" onClick={handleDelete}>
            {lang.delete}
          </BtnDelete>
        </BtnWrapper>
      </ListItem>
        
    </>
  );
}
export default ContactListItem


// {deleted && <Lottie animationData={animationDel} className='deleted'/>}
//  {isEdit && <Lottie animationData={animationEdit} className='edited'/>} 