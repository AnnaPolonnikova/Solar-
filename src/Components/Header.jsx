import { NavLink} from "react-router-dom"
import Logo from "../images/logo.png"
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import { useState } from "react"

 export const Header = ()=> {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header_container">
                <button className="burger_button" onClick={() => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)}>{isMenuOpen ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}</button>
                <div className="header_wraper">
                <img className="logo" src= {Logo}></img>
                {isMenuOpen && <div className="menu_mobile">
    <NavLink className='link' to="/">Главная</NavLink>
    <NavLink className='link' to="/servises"> Услуги </NavLink>
    <NavLink className='link' to="/greenTariff"> Зелёный тариф </NavLink>
    <NavLink className='link' to="/fiveSteps"> 5 шагов</NavLink>
    <NavLink className='link' to="/contacts"> Контакты</NavLink>
    <NavLink className='link' to="/weather"> Погода</NavLink>
    </div>}
    <div className="menu_desktop">
    <NavLink className='link' to="/">Главная</NavLink>
    <NavLink className='link' to="/servises"> Услуги </NavLink>
    <NavLink className='link' to="/greenTariff"> Зелёный тариф </NavLink>
    <NavLink className='link' to="/fiveSteps"> 5 шагов</NavLink>
    <NavLink className='link' to="/contacts"> Контакты</NavLink>
    <NavLink className='link' to="/weather"> Погода</NavLink>
    </div>
                </div>
        </header>

    )
}