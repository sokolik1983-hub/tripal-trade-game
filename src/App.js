import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import {Main, Characters, About, Contacts, NotFound} from './pages/config'
import { Layout } from './components/config'
import Biography from './pages/Biography';
import LoginFormLayout from "./pages/LoginFormLayout";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Main />} />
                    <Route path='/login' element={<LoginFormLayout />} />
                    <Route path='/characters' element={<Characters />} />
                    <Route path='/characters/:id' element={<Biography />}/>
                    <Route path='/about' element={<About />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
