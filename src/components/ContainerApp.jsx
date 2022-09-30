import { Outlet } from "react-router-dom";
import HeaderApp from "./header/Header";
import Navegacao from "./header/Navegacao";


export default function ContainerApp() {
    return(
        <>
            <Outlet/>
        </>
    );
};

