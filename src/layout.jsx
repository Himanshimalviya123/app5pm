import Topbanner from "./topbanner";
import Topnav from "./topnav";
import { Outlet } from "react-router";
const Layout=()=>{ return(
<>
<Topnav/>
<Topbanner/>
<Outlet/>
</>
)
}
export default Layout;
