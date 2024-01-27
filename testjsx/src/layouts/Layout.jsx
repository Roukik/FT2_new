import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const style = {
    body: {
        width: "100%",
        heigth: "100%",
        display: 'flex'
    },
    main: {
        flex: 1,
        maxHeigth: "100vh",
        overflowY: 'scroll',
    }
}

export default function Layout(){
    return <div style={style.body}>
        <Sidebar/>
        <div style={style.main}><Outlet></Outlet></div>
    </div>
}

