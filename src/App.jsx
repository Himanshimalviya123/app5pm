import Layout from "./layout";
import { BrowserRouter,Routes,Route } from "react-router";
import Home from "./home";
import Insert from "./insert";
import Search from "./search";
import Update from "./update";
import Display from "./display";
import Contact from "./contact";
const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="insert" element={<Insert/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="update" element={<Update/>}/>
            <Route path="display" element={<Display/>}/>
            <Route path="contact" element={<Contact/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
        

        </>
    )
    

}
export default App;