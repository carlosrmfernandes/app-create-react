import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormUser from './components/FormUser';
import ListUser from './components/ListUser';
import FormUserUpdate from './components/FormUserUpdate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/create-user' element={<FormUser/>}></Route>
        <Route path='/list-user' element={<ListUser/>}></Route>
        <Route path='/update-user/:id' element={<FormUserUpdate/>}></Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
