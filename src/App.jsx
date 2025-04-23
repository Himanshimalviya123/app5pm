import { BrowserRouter,Routes,Route } from "react-router";
import Layout from "./layout";
import Home from "./home";
import Insert from "./insert";
import Display from "./display";
import Search from "./search";
import Update from "./update";
import MyEdit from "./myedit";

const APP=()=>{
    return(
        <>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
  <Route path="insert" element={<Insert/>}/>
    <Route path="display" element={<Display/>}/>
    <Route path="search" element={<Search/>}/>
    <Route path="update" element={<Update/>}/>
    <Route path="myedit/:id" element={<MyEdit/>}/>
    


    </Route>
</Routes>
</BrowserRouter>
        </>
    )
}
export default APP;