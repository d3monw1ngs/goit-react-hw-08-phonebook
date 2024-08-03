import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { addContact, deleteContact } from '../redux/contacts/contactsOperations';
import { Filter } from '../components/Filter/Filter';
import { setFilter } from '../redux/filterSlice';
import { getContacts, getFilter } from '../redux/contacts/contactsSelectors';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts); 
  const filter = useSelector(getFilter);
  
  const handleAddContact = contact => {
    dispatch(addContact(contact));
  };

  const handleSetFilter = value => {
    dispatch(setFilter(value));
  };

  const handleDeleteContact = id => {
    console.log('handleDeleteContact called with id:', id);
    dispatch(deleteContact(id));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={handleSetFilter} />
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </>
  );
};
