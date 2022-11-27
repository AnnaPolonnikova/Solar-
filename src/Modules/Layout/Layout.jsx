import { Header } from "../../Components/Header"
import { Outlet } from "react-router-dom"
import { AppContext } from "../../context/AppContext"
export const Layout = () => {
    return (
    <>
    <AppContext.Provider >
        <Header/>
        <Outlet/>
        </AppContext.Provider>
    </>
    )
}