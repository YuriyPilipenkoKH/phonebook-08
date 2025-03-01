import { createSlice, } from "@reduxjs/toolkit";
import { Contact } from "../../types/contact.model";
import { fetchContacts, addContact, deleteContact,  editContact } from "./operations";
import { messageProps } from "../../data/messageProps";

export interface ContactsState {
  contactsList: Contact[],
  isLoading: boolean,
  error: string | null;
  message: string | null;
  totalPages: number,
  currentPage: number,
  limit: number
  counter: number
  query:string
}

const initialState:ContactsState = { 
  contactsList: [],
  isLoading: false,
  error: null,
  message: null,
  totalPages: 1,
  currentPage: 1,
  limit: 5,
  counter: 0,
  query: ''
};

const contactsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    search: (state, action) =>{
      state.query = action.payload
    }
  },
  extraReducers: builder => {
    builder

  .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        // state.message = null
        state.error = null;
      })
  .addCase(fetchContacts.fulfilled, (state, { payload }) => {

        state.isLoading = false;
        state.contactsList = payload.list;
        state.totalPages = payload.pagination.totalPages
        state.currentPage = payload.pagination.currentPage
        state.counter = payload.pagination.totalItems
        state.message = payload.pagination.totalItems === 0 
          ? payload.query === '' 
            ? messageProps.noContacts
            : messageProps.noContactsFound
          : null
        state.error = null;
      })
  .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.message = null
        state.error = payload as string;
      })
      
  .addCase(addContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
  .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contactsList.push(payload.contact)
        state.error = null;
      })
  .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      })

  .addCase(deleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
  .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contactsList = state.contactsList
          .filter(contact => contact._id !== payload.contact._id);
        state.error = null;
      })
  .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      })

  .addCase(editContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
  .addCase(editContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contactsList = state.contactsList.map(contact =>
          contact._id === payload.contact._id ? payload.contact : contact
        );
        state.error = null;
      })
  .addCase(editContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      })
  }
});
export const { search } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer