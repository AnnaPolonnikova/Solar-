export const Weather = () => {
    fetch ('https://api.openweathermap.org/data/2.5/weather?q=Minsk&&appid=160091f848e86e74e36c493631a993fa')
        .then ((resp)=> {
            return resp.json()
        })
        .then ((data)=> {
            console.log(data)
            document.querySelector('.package_name').textContent = data.name
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.disclaimer').textContent = data.weather[0]['description']
             document.querySelector('.feautures').innerHTML = `<img src ="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
        })
    return(
           <div className="weather_wraper">
            <p className="package_name">Kiev</p>
            <p className="temp">10&deg;</p>
            <p className="disclaimer">Cloud</p>
            <div className="feautures">

            </div>
            <button className="btn_primary">Go</button>
           </div>
    )


}