import { Outlet } from "react-router-dom";

export default function Classic() {
    return <>
        <div className="sidebar"></div>
        <div className="main">
            <h1>Hello World!</h1>
            <Outlet></Outlet>
        </div>
    </>
}