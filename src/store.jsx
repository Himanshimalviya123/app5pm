import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./todoslice";
const Store=configureStore({
reducer:{
todo:todoreducer
}
}
)

    

export default Store;
