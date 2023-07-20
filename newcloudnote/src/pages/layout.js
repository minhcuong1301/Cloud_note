import { Outlet } from "react-router-dom"
import MainSidebar from "../components/mainSidebar"
export default function Layout(){
    return(
        <>
        <div className="wrap-paper">
            <MainSidebar></MainSidebar>
            <Outlet></Outlet>
        </div>
        </>
    )
}