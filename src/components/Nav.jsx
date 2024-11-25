import { useEffect, useState } from "react"
import "./Nav.css"
function Nav(){
    const [show,setShow]=useState(false)
    const transistionNavBar=()=>{
        if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transistionNavBar)
        return ()=> removeEventListener("scroll",transistionNavBar)
    },[])
    return(
        <>
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
            <img className="nav_logo" src="https://www.alpacaexpeditions.com/wp-content/uploads/netflix-logo.png" alt="" />
            <img className="nav_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw2PppzLDVXIPHY38ym5Ezu-prva3prSm65w&s" alt="" />
            </div>
        </div>
        </>
    )
}
export default Nav