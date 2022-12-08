import green1 from "../../images/green1.jpg"
import green2 from "../../images/green2.jpg"

export const GreenTariff = () => {
    return(
        <>
        <div className="container">
        <h1 className="green_title">Зелёный Тариф</h1>
        <div className="green_blocks">
        <div className="green_block_1">
            <div className="green_text_text">Цена, по которой домохозяйства могут продать электроэнергию, более чем в 10 раз превышает цену, по которой они ее покупают для своих нужд — 0,16 Евро/кВт (продажа).</div>
				<img className="img_green_1" src={green1}></img>
		  </div>
        <div className="green_block_2">
            <div className="green_text_text">«Зеленый тариф» — это особые тарифные условия, которые позволяют частным домохозяйствам  не только потреблять, но и продавать выработанное домашними солнечными электростанциями электричество в электросеть общего пользования.</div>
				<img className="image_green_2" src={green2}></img>
		  </div>
        </div>

        </div>
        <div className="info">
        <div className="info_text">«Солнечная электростанция — идеальное вложение средств в свою энергонезависимость и пассивный доход»</div>
    </div>
    </>
    )
}