import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contacts/contactsOperations';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { getContacts } from '../redux/contacts/contactsSelectors';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={contacts} />
    </>
  );
};
