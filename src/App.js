import { Routes, Route } from "react-router-dom";
import {Main} from './Modules/Main/Main'
import {Servises} from './Modules/Servises/Servises'
import {Layout} from './Modules/Layout/Layout'
import {GreenTariff} from './Modules/GreenTariff/GreenTariff'
import { FiveSteps } from "./Modules/FiveSteps/FiveSteps";
import { Contacts } from "./Modules/Contacts/Contacts";
import {Weather} from "./Modules/Weather/Weather"

function App() {

  return (

    <main className="App">

    <Routes>
      <Route path="/" element= {<Layout/>}>
      <Route index  element={<Main/>}></Route>
      <Route path="servises"  element={<Servises/>}></Route>
      <Route path="greenTariff"  element={<GreenTariff/>}></Route>
      <Route path="fiveSteps"  element={<FiveSteps/>}></Route>
      <Route path="contacts"  element={<Contacts/>}></Route>
      <Route path="weather"  element={<Weather/>}></Route>
      </Route>
      </Routes>

    </main>
  );
}

export default App;
