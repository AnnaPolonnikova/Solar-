import { useState } from 'react'
import {Modal} from '../../Components/Modal'
export const Main = () => {
const [button_open, setButton_open] = useState(false);

    return(
        <>
        <div className="main">
        <div className="container">
            <h3 className="main_text"> Зелёный тариф для дома и бизнеса</h3>
            <h1 className="main_title">Солнечная электростанция</h1>
            <h2 className="main_subtitle">С доходом от 1000 $ в месяц</h2>
            <button className="btn" onClick={() => setButton_open(!button_open)} >Записаться на консультацию</button>
          {button_open && <Modal/>}


            </div>
        </div>
        </>
    )
}