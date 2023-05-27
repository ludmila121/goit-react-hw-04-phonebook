import  {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import '../components/App.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { AppContainer } from './App.styled';

export default function App()  {
  
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  
  
  
  const[filter, setFilter] = useState('');

/* useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.stringify(savedContacts);
    if (parsedContacts) {
       setContacts(parsedContacts);  
    }
  }, []); */
 
   useEffect(() => {
   /*  if (!contacts.length){
      return;
    } */
    localStorage.setItem ('contacts', JSON.stringify(contacts));
  });

 const onCheckContact = value => {
    return contacts.find(item => item.name.toLowerCase() === value.toLowerCase());
  };

 const addContact = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    if (onCheckContact(contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts(contacts  => [contact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>  prevState.filter(contact => contact.id !== contactId),
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const  getVisibleContacts = () => {
    console.log(contacts)
        const normalizedFilter = filter.toLowerCase(); 
        return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
     
    }

    return (
      <AppContainer>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={getVisibleContacts()} onDeleteContact={deleteContact} />
      </AppContainer>
    );
    } 