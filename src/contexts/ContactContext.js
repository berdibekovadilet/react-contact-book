import axios from 'axios';
import React, { useReducer } from 'react';

export const contactContext = React.createContext();

const INIT_STATE = {
    contacts: [],
    contactToEdit: {
        name:'',
        surname:'',
        phone:''
    }
}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case "GET_CONTACT_DATA":
            return {...state, contacts: action.payload}
        case "EDIT_CONTACT_DATA":
            return {...state, contactToEdit: action.payload}
        default: return state

    }
}

const ContactContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    async function addNewContact (newContact) {
       await axios.post('http://localhost:8000/contacts', newContact)
        getContactData()
   }

    async function getContactData(){
         const {data} = await axios('http://localhost:8000/contacts')
         dispatch({
             type: "GET_CONTACT_DATA",
             payload: data
         })
   }

    async function deleteContact(id){
        await axios.delete(`http://localhost:8000/contacts/${id}`)
       getContactData()
   }

   async function editContact(id){
        const {data} = await axios.patch(`http://localhost:8000/contacts/${id}`)
        dispatch({
            type: "EDIT_CONTACT_DATA",
            payload: data
        })
   }

   const saveContact = async (newContact, history) => {
    try{
      await axios.patch(`http://localhost:8000/contacts/${newContact.id}`, newContact)
      history.push('/')
    }
    catch(error){
        history.push('/error')
    }
 }

    return (
        <contactContext.Provider value={{
            contacts: state.contacts,
            contactToEdit: state.contactToEdit,
            addNewContact,
            getContactData,
            deleteContact,
            editContact,
            saveContact
         }}>
            {children}
        </contactContext.Provider>
    );
};

export default ContactContextProvider;