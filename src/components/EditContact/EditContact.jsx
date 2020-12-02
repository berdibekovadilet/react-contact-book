import React, {useContext, useEffect, useState} from 'react';
import {contactContext} from '../../contexts/ContactContext'

const EditContact = (props) => {

    const { contactToEdit, saveContact } = useContext(contactContext)
    const [name, setName] = useState(contactToEdit.name)
    const [id, setID] = useState(contactToEdit.id)
    const [surname, setSurname] = useState(contactToEdit.surname)
    const [phone, setPhone] = useState(contactToEdit.phone)
    

    useEffect(() => {
        setName(contactToEdit.name);
        setSurname(contactToEdit.surname);
        setPhone(contactToEdit.phone);
        setID(contactToEdit.id)
    }, [contactToEdit.name, contactToEdit.id, contactToEdit.phone, contactToEdit.surname ])
   

    return (
        <div>
           {name? 
            <>
                <input onChange={e => setName(e.target.value)} value={name} type="text"/>
                <input onChange={e => setSurname(e.target.value)} value={surname} type="text"/>
                <input onChange={e => setPhone(e.target.value)} value={phone} type="text"/>
                <button onClick={() => saveContact({id,name,surname,phone}, props.history)}>Save</button>
            </>
        : <h1>Loading</h1>}
        </div>
    );
};

export default EditContact;