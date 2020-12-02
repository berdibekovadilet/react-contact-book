import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AddContact from './components/AddContact/AddContact';
import Home from './components/Home/Home';
import ContactList from './components/ContactList/ContactList';
import EditContact from './components/EditContact/EditContact'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={AddContact} />
                <Route exact path="/list" component={ContactList} />
                <Route exact path="/edit" component={EditContact} />
            </Switch>  
        </BrowserRouter>
    );
};

export default Routes;