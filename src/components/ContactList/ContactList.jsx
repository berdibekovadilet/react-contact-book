import React, {useContext, useEffect} from 'react';
import {contactContext} from '../../contexts/ContactContext'
import {Link} from 'react-router-dom';

const ContactList = () => {

    const { getContactData, contacts, deleteContact, editContact } = useContext(contactContext)
    
    useEffect (() => {
        getContactData()
    }, [getContactData])
   
    
    return (
        <div>
            {contacts.map(item => (
                <ul key={item.id}>
                    <li>{item.name} {item.surname} {item.phone} 
                        <button onClick={() => deleteContact(item.id)}>Delete</button> 
                        <Link to="/edit">
                             <button onClick={() => editContact(item.id)}>Edit</button>
                        </Link>
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default ContactList;