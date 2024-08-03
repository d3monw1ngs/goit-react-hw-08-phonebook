import React from 'react';
import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { getContacts, getFilter } from '../../redux/contacts/contactsSelectors';
import PropTypes from 'prop-types';

export const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log('ContactList rendered with contacts:', contacts);
  console.log('Filter value:', filter);
  console.log('onDeleteContact prop:', onDeleteContact);

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <ul>
    {filteredContacts.map(contact => (
      <ContactListItem 
        key={contact.id} 
        contact={contact} 
        onDeleteContact={onDeleteContact} 
        />
    ))}
  </ul>
  );
};

ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
};