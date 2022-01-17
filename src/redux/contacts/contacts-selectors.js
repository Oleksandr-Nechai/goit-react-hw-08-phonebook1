import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getVisibleContacts = createSelector([getAllContacts, getFilter], (contacts, filter) => {
  console.log('Filter:', filter);
  console.log('Contacts', contacts);
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
});

const contactsSelectors = {
  getAllContacts,
  getLoading,
  getFilter,
  getVisibleContacts,
};
export default contactsSelectors;
