import { NavLink, useNavigate } from "react-router-dom"
import Logo from "../images/logo.png"
import {AiOutlineMenu, AiOutLineClose} from "react-icons/ai"
import { useState } from "react"
export const Header = ()=> {
   
    const [nav, setNav] = useState(false);
    return (
      

        <header>
             <div className="container">
                <div className="header_wraper">
                <img className="logo" src= {Logo}></img>
                <div onClick={() => setNav(!navLink)} className="mobile_btn">
                    {nav ?  <AiOutLineClose/> : <AiOutlineMenu/>}
                
               
                </div>
                <div className={nav ? [style.menu, style.active].join(' '): [style.menu]}>
    <NavLink className='link' to="/">Главная</NavLink>
    <NavLink className='link' to="/servises"> Услуги </NavLink>
    <NavLink className='link' to="/greenTariff"> Зелёный тариф </NavLink>
    <NavLink className='link' to="/fiveSteps"> 5 шагов</NavLink>
    <NavLink className='link' to="/contacts"> Контакты</NavLink>
    </div>
                </div>
             </div>
        </header>
  
    )
}