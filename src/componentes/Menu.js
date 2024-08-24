import React,{useState} from 'react';
import './Menu.css'
import { CgClose } from "react-icons/cg";


const Menu = () => {


    return(
        <div className='container'>
        <CgClose className = "closeX" size={"40px"} color='white' onClick={null} ></CgClose>
        <ul >
  <li ><a href='www.google.com'>Atividade</a></li>
  <li><a href=''>Comer e beber</a></li>
  <li><a href=''>Onde se hospedar</a></li>
  <li><a href=''>Comécio e serviços</a></li>
  <li><a href=''>Eventos</a></li>
  <li><a href='Família'>Família</a></li>
  <li><a href=''>Sobre</a></li>
        </ul>





        </div>
    );
}


export default Menu;