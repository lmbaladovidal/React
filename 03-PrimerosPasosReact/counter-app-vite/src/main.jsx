import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { FirstApp } from './FirstApp';
import {HelloWorld} from './HelloWorld';
import {CounterApp} from './CounterApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorld />
        <CounterApp value={22}/>
        {/* <FirstApp title={"Hola, soy Goku!"} subtitle='Soy un sexy subtitulo' counter={1}/> */}
    </React.StrictMode>
);