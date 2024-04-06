import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import Toolbar from "../../components/toolbar/toolbar";

export default function Classic() {
    return <>
        <div className="fixed top-0 bottom-0 left-0 w-64">
            <Sidebar></Sidebar>
        </div>
        <div className="w-full pl-64 h-16 fixed top-0">
            <Toolbar></Toolbar>
        </div>
        <div className="pl-64 pt-16 overflow-y-auto">
            <Outlet></Outlet>
        </div>
    </>
}