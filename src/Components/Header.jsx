import { NavLink } from "react-router-dom"

export const Header = ()=> {
    return (
       
        <header>
             <div className="container">
                <img src="../images/logo.jpg"></img>
    <NavLink className='link' to="/">Главная</NavLink>
    <NavLink className='link' to="/servises"> Услуги </NavLink>
    <NavLink className='link' to="/greenTariff"> Зелёный тариф </NavLink>
    <NavLink className='link' to="/fiveSteps"> 5 шагов</NavLink>
    <NavLink className='link' to="/contacts"> Контакты</NavLink>
             </div>
        </header>
  
    )
}