import style from "./Card.module.css"
import { NavLink } from "react-router-dom";

const Card = (props) => {

   return (
      <div className={style.card}>
         <button onClick={()=>{props.onClose(props.id)}}>X</button>
         <NavLink to={`/detail/${props.id}`}>

         <h2 className={style.name}>{props.name}</h2>
         
         </NavLink>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt='' />
      </div>
   );
}

export default Card
