import { useSelector } from "react-redux"
import Card from "../Card/Card"

const Favorites = ()=>{

    const myFavorites = useSelector(state => state.myFavorites)

    return(
        <div>
            {
                myFavorites.map((fav)=>{
                    return(
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            status={fav.status}
                            species={fav.species}
                            gender={fav.gender}
                            origin={fav.origin.name}
                            image={fav.image}
                            //onClose={onClose}
                        />
                    )
                })
            }
        </div>
    )
}

export default Favorites