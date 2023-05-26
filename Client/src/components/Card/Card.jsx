import style from "./Card.module.css"
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFav, removeFav } from "../../Redux/action";
import { useState, useEffect } from "react";

const Card = (props) => {

   const [isFav, setIsFav] = useState(false)
   const dispatch = useDispatch()
   const myFavorites = useSelector((state) => state.myFavorites)


   const handleFavorite = () => {
      if (isFav) {
         dispatch(removeFav(props.id))
      }
      else {
         dispatch(addFav(props))
      }
      setIsFav(!isFav)
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className={style.card}>
         <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍" }</button>
         <button onClick={() => { props.onClose(props.id) }}>X</button>
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
