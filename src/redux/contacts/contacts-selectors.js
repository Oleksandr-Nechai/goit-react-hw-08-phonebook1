import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getVisibleContacts = createSelector([getAllContacts, getFilter], (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  if (filter === '') return contacts;
  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
});

const contactsSelectors = {
  getAllContacts,
  getLoading,
  getFilter,
  getVisibleContacts,
};
export default contactsSelectors;
