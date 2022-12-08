import {Input} from '../Components/Input'

export const Modal = () => {
    return (
        <div className="modal_wrapper">
            <div className='modal'>
                <Input placeholder='Имя'/>
                <Input placeholder='Телефон'/>
                <button className="modal_button">Отправить заявку</button>
            </div>
                
          
        </div>
    )
}