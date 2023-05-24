import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import  {Contact}  from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Contact>
      {contacts.map(contact => (
        <ContactItem key={contact.id} onDeleteContact={onDeleteContact} contacts={contact} />
      ))}
    </Contact>
  );
};

export default ContactList;