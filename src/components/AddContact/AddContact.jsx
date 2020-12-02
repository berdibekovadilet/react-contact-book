import React, {useContext, useState} from 'react';
import {contactContext} from '../../contexts/ContactContext'

const AddContact = () => {

    const [contact, setContact] = useState ({});

    const {addNewContact} = useContext(contactContext)

    function handleInputsValue (e) {
        let obj = {
            ...contact,
            [e.target.name]: e.target.value
        }

        setContact(obj)

    }

    return (
        <div>
            <input 
                name="name"
                onChange={handleInputsValue} 
                type="text"
                placeholder="Name"
            />
            <input 
                name="surname"
                onChange={handleInputsValue} 
                type="text"
                placeholder="Surname"
            />
            <input 
                name="phone"
                onChange={handleInputsValue}
                type="text"
                placeholder="Phone"
            />
            <button onClick={() => addNewContact(contact)}>Add</button>
        </div>
    );
};

export default AddContact;