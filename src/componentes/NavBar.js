import React,{useState} from 'react';
import './NavBar.css';
import { CgMenu } from "react-icons/cg";
import { CgSearch } from "react-icons/cg";
import { CgRadioCheck } from "react-icons/cg";

const NavBar = () => {

  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(prevState => !prevState);
  };

  return (
    <nav className="navbar">
     
      <CgMenu className='button-menu'  size={"30px"} color='white' onClick={() => {alert("Funciona")}} ></CgMenu>
      <CgSearch size={"30px"}  color='white' className='lupa' onClick={toggleSearchBar}  />
      {showSearchBar && ( <input type="text" placeholder="Digite para pesquisar..." className="search-bar"/>)}
      <CgRadioCheck size={"30px"}  color='white' className='logo' onClick={toggleSearchBar} /> 
      
    </nav>
  );
}

export default NavBar;
