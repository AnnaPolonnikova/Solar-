import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { Outlet } from "react-router-dom"
import { AppContext } from "../../context/AppContext"
export const Layout = () => {
    return (
    <>
    <AppContext.Provider >
        <Header/>
        <Outlet/>
		  <Footer/>
        </AppContext.Provider>
    </>
    )
}