import "./Container.css"
import { Route, Routes } from "react-router-dom";
import SidebarComponent from "../components/SidebarComponent"
import DescriptionScreen from "./DescriptionScreen"
import HomeScreen from "./HomeScreen"
import WishlistScreen from "./WishlistScreen"
export default function Container(){
    return(
    <div className="ContainerWrapper">
        <SidebarComponent/>
        <Routes>
            <Route path="/" element=<HomeScreen /> />
            <Route path="/search" element=<HomeScreen /> />
            <Route path="/description" element=<DescriptionScreen /> />
            <Route path="/wishlist" element=<WishlistScreen /> />
        </Routes>
    </div>)
}