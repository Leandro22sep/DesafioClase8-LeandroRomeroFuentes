import { Link } from "react-router-dom";
const NavBar = (props) => {
    if(props.type === "header"){
        return(
            <>
                <nav className="nav">
                    <Link to="/categoria/hoodies">Hoodies</Link>
                    <Link to="/categoria/camperas">Camperas</Link>
                    <Link to="/categoria/remeras">Remeras</Link>
                    <Link to="/carrito"><span className="material-symbols-outlined">shopping_cart</span></Link>
                </nav>
            </>
        )
    }else if(props.type === "footer"){
        return(
            <>
                <nav className="nav">
                    <a href="#">link-footer</a>
                    <a href="#">link-footer</a>
                    <a href="#">link-footer</a>
                </nav>
            </>
        )
    }
    
}

export default NavBar;