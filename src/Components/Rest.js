import RestHeader from "./restHeader";
import { Outlet } from "react-router";

export default function Rest(){
    return (
        <>
            <RestHeader></RestHeader>
            <Outlet></Outlet>
        </>
    )
}