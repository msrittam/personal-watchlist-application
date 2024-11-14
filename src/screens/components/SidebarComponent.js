import "./SidebarComponent.css"
import { useState } from "react"
import Cookies from "js-cookie";
import { useAuthContext } from "../../hooks/UseAuthContext";
import { useNavigate } from "react-router-dom";//importing useNavigate for navigation purpose
export default function SidebarComponent(){
    const navigate = useNavigate();//initializing navigate for navigation purpose
    const [wishlistActive, setWishlistActive] = useState(false);
    const { dispatch } = useAuthContext();
    const removeAuth = async () => {
      Cookies.remove("authToken");
      dispatch({ type: "LOGOUT" });
      };
    return(
    <div className="SidebarWrapper">
        <div className="BigScreenComponents">
            <h1>Watchlists</h1>
            {/*use below feature for searching movies from sidebar*/}
            {/*<input placeholder="Search"/>*/}
            <button onClick={function(){navigate("/home/search")}}>Home</button>
            <h2>My Lists</h2>
        </div>
        <div className="SmallScreenComponents">
            <h1>Watchlists</h1>
            <div>
                <button onClick={function(){navigate("/home/search")}}>Home</button>
                <button onClick={function(){
                if(wishlistActive){setWishlistActive(false)}
                else{setWishlistActive(true)}
                }}>My Lists</button>
            </div>
        </div>
        <div className={wishlistActive?"NonBigScreenComponents":"BigScreenComponents"}>
            <button className="WishlistButtons"
            onClick={function(){
                      if(wishlistActive){setWishlistActive(false)}
                      else{setWishlistActive(true)}
                      navigate("/home/wishlist")
                      }}>Your personal watchlist</button>
        </div>
        <button className="SidebarLogoutButton" onClick={function(){removeAuth()}}>Logout</button>
    </div>)
}