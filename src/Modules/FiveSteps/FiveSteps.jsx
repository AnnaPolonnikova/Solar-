import fivesteps from "../../images/clients1.jpg"


export const FiveSteps= () => {
    return(
        <div className="container">
            <div className="five_steps">
            <div className="five_steps_1">
        <h1 className="five_steps_title"> Пять шагов к собственной электростанции</h1>
        <p  className="number">01</p>
        <h2 className="five_title">Заявка или звонок</h2>
        <p  className="five_text">Оставляете заявку на нашем сайте или связываетесь с нами по телефону или в мессенджерах.</p>

        <p  className="number">02</p>
        <h2 className="five_title">Консультация и замер на объекте</h2>
        <p className="five_text">Мы просчитываем более 10- 15 вариантов солнечной станции на Вашем участке, чтобы предложить Вам один наиболее выгодный.</p>

        <p  className="number">03</p>
        <h2 className="five_title">Заключение договора</h2>
        <p className="five_text">Заключается договор, благодаря которому, вы будете застрахованы от некачественного оборудования и срыва сроков.</p>

        <p  className="number">04</p>
        <h2 className="five_title">Монтаж СЭС</h2>
        <p>Наши специалисты производят монтаж солнечных батарей, проводки и инверторов, при необходимости изготавливают опоры.</p>

        <p  className="number">05</p>
        <h2 className="five_title">Получение дохода от государства</h2>
        <p className="five_text">После подключения к «Зеленому тарифу», вы получаете доход за каждый киловатт, выработанный на Вашей солнечной электростанции по зафиксированному тарифу на момент подключения.</p>
        </div>
        <div className="five_steps_2">
        <img className="five_img" src={fivesteps}/>
        </div>
        </div>
        </div>
    )
}