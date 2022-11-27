import Logo from "../../images/logo.png"

export const Contacts = ()=> {
    return(
        <div className="contacts_wraper">
        <div className="container">
     
        <p className="contacts">Контакты</p>
       
        <div className="contacts_info">
       Центральный офис: г. Москва, ул,Гоголя 13, 1й этаж
        </div>
        <div className="contacts_info">
        Представительство в Киеве: г. Киев, ул. Є. Коновальця, 103 оф. 410
        </div>
        <div className="contacts_info">
        Представительства в Харькове, Одессе, Ростове, Сочи, Белгороде
        </div>
        <div className="contacts_info">
        +7 987 654-54-56 +38 067 504-32-57
        </div>
        <div className="contacts_info">
       Ежедневно 08:00 - 20:00
        </div>
        <div className="contacts_footer">
             <p className="contacts_text">политика безопасности</p>
             <img className="logo_footer" src={Logo}></img>
        </div>

        </div>
        </div>
    )
}