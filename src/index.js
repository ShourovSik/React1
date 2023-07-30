import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'

const myName = "SHOUROV SIKDER"//js property.

const date= new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <div>
    <h1 className = "heading">WELCOME</h1>
    <h3 className='name'>{myName}</h3> 
    <p>{dateName + "/" + monthName + "/" + yearName}</p>

   </div>
);


