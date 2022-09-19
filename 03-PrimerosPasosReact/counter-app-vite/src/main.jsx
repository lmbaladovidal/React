import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { FirstApp } from './FirstApp';
import {HelloWorld} from './HelloWorld'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorld />
        <FirstApp title={"Hola, soy Goku!"} subtitle='Soy un sexy subtitulo' counter={1}/>
    </React.StrictMode>
);