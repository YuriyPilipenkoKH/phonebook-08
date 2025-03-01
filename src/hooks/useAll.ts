import { useSelector } from "react-redux"
import { getModal, getModalIsOpen, getSelectedContact } from "../redux/modal/modalSelectors"
import { getLang } from "../redux/lang/selectors"
import { getTheme } from "../redux/theme/selectors"
import { selectGenContact } from "../redux/generator/selectors"



export const useAll = () => {
  
  return {
    modal: useSelector(getModal),
    modalIsOpen: useSelector(getModalIsOpen),
    selectedContact: useSelector(getSelectedContact),
    theme: useSelector(getTheme),
    language: useSelector(getLang),
    genContact: useSelector(selectGenContact),

  }
}