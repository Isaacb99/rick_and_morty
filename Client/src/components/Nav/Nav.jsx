import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"


const Nav = ({onSearch})=>{
    return(
        <div className={style.nav}>
            <SearchBar onSearch={onSearch} />
            <button>
                <Link to="/About">About</Link>
            </button>
            
            <button>
                <Link to="/home">Home</Link>
            </button>

            <button>
                <Link to="/favorites">Favorites</Link>
            </button>
        
        </div>
    )
}

export default Nav